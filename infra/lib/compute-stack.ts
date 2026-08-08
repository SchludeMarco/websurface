import { Duration, Stack, StackProps, Tags } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as ecs from "aws-cdk-lib/aws-ecs";
import * as ecr from "aws-cdk-lib/aws-ecr";
import * as elbv2 from "aws-cdk-lib/aws-elasticloadbalancingv2";
import * as iam from "aws-cdk-lib/aws-iam";
import * as logs from "aws-cdk-lib/aws-logs";
import * as rds from "aws-cdk-lib/aws-rds";
import * as s3 from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export interface ComputeStackProps extends StackProps {
  vpc: ec2.Vpc;
  albSecurityGroup: ec2.SecurityGroup;
  ecsSecurityGroup: ec2.SecurityGroup;
  database: rds.DatabaseInstance;
  uploadBucket: s3.Bucket;
}

const CONTAINER_PORT = 3000;

/**
 * Compute-Schicht: ECS-Cluster mit einem Fargate-Service (Next.js-App)
 * hinter einem Application Load Balancer, plus die dazugehörigen
 * IAM-Rollen. Schwerpunkt dieses Nachweises ist bewusst Compute &
 * Netzwerk (siehe README) — RDS/S3 werden hier nur referenziert
 * (Least-Privilege-Zugriff), ihre Definition liegt in data-stack.ts.
 *
 * Kein reales Container-Image wird gebaut/gepusht — das ECR-Repository ist
 * hier als Platzhalter für den CI/CD-Schritt "docker build && push"
 * angelegt, der in diesem Prototyp nicht Teil des Scopes ist.
 */
export class ComputeStack extends Stack {
  constructor(scope: Construct, id: string, props: ComputeStackProps) {
    super(scope, id, props);

    const repository = new ecr.Repository(this, "AppRepository", {
      repositoryName: "websurface-app",
      imageScanOnPush: true,
    });

    const cluster = new ecs.Cluster(this, "Cluster", {
      vpc: props.vpc,
      containerInsightsV2: ecs.ContainerInsights.ENABLED,
    });

    // Task Execution Role: darf nur das Image von ECR ziehen und nach
    // CloudWatch Logs schreiben (verwaltet den Container-Lifecycle selbst).
    const executionRole = new iam.Role(this, "TaskExecutionRole", {
      assumedBy: new iam.ServicePrincipal("ecs-tasks.amazonaws.com"),
      managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName(
          "service-role/AmazonECSTaskExecutionRolePolicy"
        ),
      ],
    });

    // Task Role: die Rechte, die der Next.js-Anwendungscode zur Laufzeit
    // tatsächlich braucht — bewusst getrennt von der Execution Role
    // (Least Privilege statt einer Sammelrolle für beides).
    const taskRole = new iam.Role(this, "TaskRole", {
      assumedBy: new iam.ServicePrincipal("ecs-tasks.amazonaws.com"),
    });
    props.database.secret?.grantRead(taskRole);
    props.uploadBucket.grantReadWrite(taskRole);

    const logGroup = new logs.LogGroup(this, "AppLogGroup", {
      retention: logs.RetentionDays.ONE_MONTH,
    });

    const taskDefinition = new ecs.FargateTaskDefinition(this, "TaskDefinition", {
      cpu: 512,
      memoryLimitMiB: 1024,
      executionRole,
      taskRole,
    });

    taskDefinition.addContainer("web", {
      image: ecs.ContainerImage.fromEcrRepository(repository, "latest"),
      portMappings: [{ containerPort: CONTAINER_PORT }],
      logging: ecs.LogDrivers.awsLogs({ streamPrefix: "websurface", logGroup }),
      environment: {
        NODE_ENV: "production",
      },
      secrets: {
        DATABASE_URL: ecs.Secret.fromSecretsManager(props.database.secret!),
      },
    });

    const service = new ecs.FargateService(this, "Service", {
      cluster,
      taskDefinition,
      desiredCount: 2,
      securityGroups: [props.ecsSecurityGroup],
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS },
      healthCheckGracePeriod: Duration.seconds(60),
      minHealthyPercent: 100,
      maxHealthyPercent: 200,
      circuitBreaker: { rollback: true },
    });

    const scaling = service.autoScaleTaskCount({ minCapacity: 2, maxCapacity: 6 });
    scaling.scaleOnCpuUtilization("CpuScaling", {
      targetUtilizationPercent: 60,
      scaleInCooldown: Duration.seconds(60),
      scaleOutCooldown: Duration.seconds(60),
    });

    const alb = new elbv2.ApplicationLoadBalancer(this, "Alb", {
      vpc: props.vpc,
      internetFacing: true,
      securityGroup: props.albSecurityGroup,
      vpcSubnets: { subnetType: ec2.SubnetType.PUBLIC },
    });

    const listener = alb.addListener("HttpListener", {
      port: 80,
      // Hinweis: In Produktion Port 443 mit ACM-Zertifikat + Redirect von
      // 80 auf 443. Hier bewusst nur Port 80, da kein reales Zertifikat/
      // keine reale Domain in diesem Portfolio-Projekt existiert.
      open: false,
    });

    listener.addTargets("AppTargets", {
      port: CONTAINER_PORT,
      protocol: elbv2.ApplicationProtocol.HTTP,
      targets: [service],
      healthCheck: {
        path: "/",
        healthyHttpCodes: "200-399",
        interval: Duration.seconds(30),
      },
    });

    Tags.of(this).add("project", "websurface");
    Tags.of(this).add("stack", "compute");
  }
}
