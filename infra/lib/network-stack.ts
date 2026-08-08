import { Stack, StackProps, Tags } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

/**
 * Netzwerk-Fundament: eine VPC über 2 Availability Zones mit drei
 * Subnetz-Ebenen (public / private-mit-egress / isolated) plus den
 * Security Groups, die den Zugriffspfad ALB -> ECS -> RDS auf das
 * jeweils Nötigste beschränken.
 *
 * Bewusste Kostenentscheidung: ein einzelnes NAT Gateway (statt eines je AZ)
 * reduziert die laufenden Kosten für dieses Portfolio-/Demo-Projekt um
 * ca. 32 EUR/Monat, opfert dafür AZ-Redundanz für ausgehenden Traffic der
 * privaten Subnetze. In einem echten Produktivbetrieb mit hohen
 * Verfügbarkeitsanforderungen wäre natGateways: 2 die richtige Wahl
 * (siehe CIO-Review im Konzeptdokument).
 */
export class NetworkStack extends Stack {
  public readonly vpc: ec2.Vpc;
  public readonly albSecurityGroup: ec2.SecurityGroup;
  public readonly ecsSecurityGroup: ec2.SecurityGroup;
  public readonly dbSecurityGroup: ec2.SecurityGroup;

  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new ec2.Vpc(this, "WebSurfaceVpc", {
      maxAzs: 2,
      natGateways: 1,
      subnetConfiguration: [
        {
          name: "public",
          subnetType: ec2.SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: "private-app",
          subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
          cidrMask: 24,
        },
        {
          name: "private-data",
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
          cidrMask: 24,
        },
      ],
    });

    this.albSecurityGroup = new ec2.SecurityGroup(this, "AlbSecurityGroup", {
      vpc: this.vpc,
      description: "Erlaubt eingehenden HTTPS/HTTP-Traffic aus dem Internet zum ALB",
      allowAllOutbound: true,
    });
    this.albSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(443),
      "HTTPS aus dem Internet"
    );
    this.albSecurityGroup.addIngressRule(
      ec2.Peer.anyIpv4(),
      ec2.Port.tcp(80),
      "HTTP aus dem Internet (Redirect auf 443 in Produktion)"
    );

    this.ecsSecurityGroup = new ec2.SecurityGroup(this, "EcsSecurityGroup", {
      vpc: this.vpc,
      // CloudFormation erlaubt in GroupDescription keine Umlaute/Sonderzeichen wie ß.
      description: "Erlaubt Traffic ausschliesslich vom ALB zu den Fargate-Tasks",
      allowAllOutbound: true,
    });
    this.ecsSecurityGroup.addIngressRule(
      this.albSecurityGroup,
      ec2.Port.tcp(3000),
      "Next.js-Container-Port, nur vom ALB erreichbar"
    );

    this.dbSecurityGroup = new ec2.SecurityGroup(this, "DbSecurityGroup", {
      vpc: this.vpc,
      description: "Erlaubt Postgres-Traffic ausschliesslich von den ECS-Tasks, kein Public Ingress",
      allowAllOutbound: false,
    });
    this.dbSecurityGroup.addIngressRule(
      this.ecsSecurityGroup,
      ec2.Port.tcp(5432),
      "Postgres, nur von den Fargate-Tasks"
    );

    Tags.of(this).add("project", "websurface");
    Tags.of(this).add("stack", "network");
  }
}
