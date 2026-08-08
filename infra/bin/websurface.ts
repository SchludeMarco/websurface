#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { NetworkStack } from "../lib/network-stack";
import { DataStack } from "../lib/data-stack";
import { ComputeStack } from "../lib/compute-stack";

const app = new cdk.App();

// Region eu-central-1 (Frankfurt) für Datenresidenz innerhalb der EU,
// siehe Datenschutzerklärung der App (/datenschutz) und Konzeptdokument.
const env = { region: "eu-central-1" };

const network = new NetworkStack(app, "WebSurfaceNetworkStack", { env });

const data = new DataStack(app, "WebSurfaceDataStack", {
  env,
  vpc: network.vpc,
  dbSecurityGroup: network.dbSecurityGroup,
});

new ComputeStack(app, "WebSurfaceComputeStack", {
  env,
  vpc: network.vpc,
  albSecurityGroup: network.albSecurityGroup,
  ecsSecurityGroup: network.ecsSecurityGroup,
  database: data.database,
  uploadBucket: data.uploadBucket,
});
