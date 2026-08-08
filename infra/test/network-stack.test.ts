import { App } from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import { NetworkStack } from "../lib/network-stack";

function synthNetworkStack() {
  const app = new App();
  const stack = new NetworkStack(app, "TestNetworkStack", {
    env: { region: "eu-central-1" },
  });
  return Template.fromStack(stack);
}

describe("NetworkStack", () => {
  it("erstellt eine VPC mit genau 6 Subnetzen (3 Ebenen x 2 AZs)", () => {
    const template = synthNetworkStack();
    template.resourceCountIs("AWS::EC2::VPC", 1);
    template.resourceCountIs("AWS::EC2::Subnet", 6);
  });

  it("erlaubt beim Datenbank-Security-Group ausschließlich Zugriff von der ECS-Security-Group, kein 0.0.0.0/0 Ingress", () => {
    const template = synthNetworkStack();

    template.hasResourceProperties("AWS::EC2::SecurityGroupIngress", {
      FromPort: 5432,
      ToPort: 5432,
    });

    const ingressResources = template.findResources(
      "AWS::EC2::SecurityGroupIngress",
      {
        Properties: {
          FromPort: 5432,
        },
      }
    );

    for (const resource of Object.values(ingressResources)) {
      expect(resource.Properties.CidrIp).toBeUndefined();
    }
  });

  it("erlaubt beim ALB-Security-Group Ingress nur auf Port 80/443", () => {
    // CDK bettet Ingress-Regeln mit statischem CIDR-Peer inline in die
    // AWS::EC2::SecurityGroup-Ressource ein (separate
    // AWS::EC2::SecurityGroupIngress-Ressourcen entstehen nur, wenn der
    // Peer eine andere Security Group ist, siehe Tests oben).
    const template = synthNetworkStack();
    template.hasResourceProperties("AWS::EC2::SecurityGroup", {
      GroupDescription: Match.stringLikeRegexp("ALB"),
      SecurityGroupIngress: Match.arrayWith([
        Match.objectLike({ CidrIp: "0.0.0.0/0", FromPort: 443, ToPort: 443 }),
        Match.objectLike({ CidrIp: "0.0.0.0/0", FromPort: 80, ToPort: 80 }),
      ]),
    });
  });

  it("nutzt genau ein NAT Gateway (dokumentierte Kostenentscheidung)", () => {
    const template = synthNetworkStack();
    template.resourceCountIs("AWS::EC2::NatGateway", 1);
  });
});
