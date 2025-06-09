import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import { BackendStack } from './backend-stack'
import { FrontendStack } from './frontend-stack'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export enum AppStage {
  Prod = 'prod',
  Dev = 'dev',
}

export interface InfraStackProps extends cdk.StackProps {
  stage: AppStage
}

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: InfraStackProps) {
    super(scope, id, props)

    const backend = new BackendStack(this, 'Backend')

    const frontend = new FrontendStack(this, 'Frontend', {
      apiUrl: backend.apiUrl,
    })

    frontend.addDependency(backend)
  }
}
