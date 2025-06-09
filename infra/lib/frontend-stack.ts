import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'
import { Construct } from 'constructs'

export class FrontendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: { apiUrl: string }) {
    super(scope, id)

    const bucket = new s3.Bucket(this, 'TrustanaFrontendBucket', {
      websiteIndexDocument: 'index.html', // Enable static website hosting
      autoDeleteObjects: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ACLS_ONLY,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    })

    const distribution = new cloudfront.Distribution(
      this,
      'TrustanaDistribution',
      {
        defaultBehavior: {
          origin: new origins.S3StaticWebsiteOrigin(bucket),
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
        },
        enableLogging: true,
        defaultRootObject: 'index.html',
      },
    )

    const deployFrontend = new s3deploy.BucketDeployment(
      this,
      'DeployFrontend',
      {
        sources: [
          s3deploy.Source.asset('../frontend/dist', {
            // exclude: ['*.html'],
          }),
          // s3deploy.Source.data('env.js', `window.API_URL="${props.apiUrl}";`),
        ],
        destinationBucket: bucket,
        distribution,
      },
    )

    deployFrontend.node.addDependency(distribution)

    // Add a bucket policy to allow public reads (if required)
    bucket.addToResourcePolicy(
      new cdk.aws_iam.PolicyStatement({
        actions: ['s3:GetObject'],
        resources: [bucket.arnForObjects('*')],
        principals: [new cdk.aws_iam.AnyPrincipal()],
      }),
    )
  }
}
