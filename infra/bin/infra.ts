#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib'
import { AppStage, InfraStack } from '../lib/infra-stack'

const app = new cdk.App()

new InfraStack(app, 'TrustanaInfraStack', {
  stage: AppStage.Dev,
  /* For more information, see https://docs.aws.amazon.com/cdk/latest/guide/environments.html */
})
