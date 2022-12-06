import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket1 = new aws.s3.Bucket("bucket1");
const bucket2 = new aws.s3.Bucket("bucket2");
const bucket3 = new aws.s3.Bucket("bucket3");

export const bucketNames = {
    bucket1Name: bucket1.bucket,
    bucket2Name: bucket2.bucket,
    bucket3Name: bucket3.bucket
}
