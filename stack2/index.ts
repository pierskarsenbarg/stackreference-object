import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";
import { ConnectionAssociation } from "@pulumi/aws/directconnect";

const stackRef = new pulumi.StackReference("pierskarsenbarg/stackreference-object-stack1/dev");

const bucketNames = stackRef.requireOutput("bucketNames");

bucketNames.apply(x => {
    console.log(x)
})