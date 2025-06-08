import * as cdk from 'aws-cdk-lib'
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import * as origins from 'aws-cdk-lib/aws-cloudfront-origins'
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment'

export class FrontendStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: { apiUrl: string }) {
    super(scope, id)

    const bucket = new s3.Bucket(this, 'FrontendBucket', {
      websiteIndexDocument: 'index.html',
      publicReadAccess: false,
    })

    const distribution = new cloudfront.Distribution(this, 'Distribution', {
      defaultBehavior: { origin: new origins.S3Origin(bucket) },
    })

    new s3deploy.BucketDeployment(this, 'DeployFrontend', {
      sources: [
        s3deploy.Source.asset('../frontend/dist', {
          exclude: ['*.html'],
        }),
        s3deploy.Source.data('env.js', `window.API_URL="${props.apiUrl}";`),
      ],
      destinationBucket: bucket,
      distribution,
    })
  }
}
