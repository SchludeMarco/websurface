import { Duration, RemovalPolicy, Stack, StackProps, Tags } from "aws-cdk-lib";
import * as ec2 from "aws-cdk-lib/aws-ec2";
import * as rds from "aws-cdk-lib/aws-rds";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as kms from "aws-cdk-lib/aws-kms";
import { Construct } from "constructs";

export interface DataStackProps extends StackProps {
  vpc: ec2.Vpc;
  dbSecurityGroup: ec2.SecurityGroup;
}

/**
 * Persistenz-Schicht: RDS Postgres (isoliertes Subnetz, kein Public
 * Access) für die App-Ideen/Analyseergebnisse sowie ein S3-Bucket für die
 * kurzlebige Upload-Zwischenspeicherung der CSV-Analyse — mit
 * Lifecycle-Löschung nach 24h und eigenem KMS-Schlüssel (SSE-KMS), analog
 * zur "keine dauerhafte Rohdatenspeicherung"-Zusage in der
 * Datenschutzerklärung der App.
 *
 * removalPolicy: DESTROY und autoDeleteObjects sind bewusst für dieses
 * Portfolio-/Demo-Projekt gesetzt, damit sich der Stack rückstandslos
 * abbauen lässt. In einem echten Produktivbetrieb mit echten Kundendaten
 * wäre RemovalPolicy.RETAIN + automatisierte Snapshots die richtige Wahl.
 */
export class DataStack extends Stack {
  public readonly database: rds.DatabaseInstance;
  public readonly uploadBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props: DataStackProps) {
    super(scope, id, props);

    const dbCredentialsSecretName = "websurface/rds/credentials";

    this.database = new rds.DatabaseInstance(this, "Database", {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_16,
      }),
      instanceType: ec2.InstanceType.of(
        ec2.InstanceClass.T4G,
        ec2.InstanceSize.MICRO
      ),
      vpc: props.vpc,
      vpcSubnets: { subnetType: ec2.SubnetType.PRIVATE_ISOLATED },
      securityGroups: [props.dbSecurityGroup],
      credentials: rds.Credentials.fromGeneratedSecret("websurface_app", {
        secretName: dbCredentialsSecretName,
      }),
      databaseName: "websurface",
      allocatedStorage: 20,
      storageEncrypted: true,
      multiAz: false, // Kostenentscheidung für Demo-Betrieb, siehe network-stack.ts
      publiclyAccessible: false,
      deletionProtection: false,
      removalPolicy: RemovalPolicy.DESTROY,
      backupRetention: Duration.days(1),
    });

    const uploadKmsKey = new kms.Key(this, "UploadBucketKey", {
      description: "SSE-KMS-Schlüssel für kurzlebige CSV-Upload-Zwischenspeicherung",
      enableKeyRotation: true,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    this.uploadBucket = new s3.Bucket(this, "UploadBucket", {
      encryption: s3.BucketEncryption.KMS,
      encryptionKey: uploadKmsKey,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      versioned: false,
      lifecycleRules: [
        {
          id: "expire-temp-uploads-after-24h",
          expiration: Duration.days(1),
        },
      ],
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    Tags.of(this).add("project", "websurface");
    Tags.of(this).add("stack", "data");
  }
}
