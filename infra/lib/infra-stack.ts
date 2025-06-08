import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const backend = new BackendStack(this, 'Backend')
    new FrontendStack(this, 'Frontend', { apiUrl: backend.apiUrl })
  }
}
