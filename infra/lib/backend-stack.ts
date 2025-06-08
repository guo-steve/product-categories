import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'

export class BackendStack extends cdk.Stack {
  public readonly apiUrl: string

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    const handler = new lambda.Function(this, 'ApiHandler', {
      runtime: lambda.Runtime.NODEJS_18_X,
      code: lambda.Code.fromAsset('../backend/dist'),
      handler: 'index.handler',
    })

    const api = new apigateway.LambdaRestApi(this, 'ApiGateway', {
      handler,
      proxy: false,
    })

    this.apiUrl = api.url
  }
}
