import { Construct } from 'constructs'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import { NodejsFunctionProps } from 'aws-cdk-lib/aws-lambda-nodejs'
import { createNodejsFunction, PartialRequired } from './lambda'

export const defaultPreflightOptions: apigateway.CorsOptions = {
  allowHeaders: [
    'Content-Type',
    'X-Amz-Date',
    'Authorization',
    'X-Api-Key',
    'X-Aws-Waf-Token',
    'X-Custom-App-Version-Tag',
  ],
  allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowCredentials: false,
  allowOrigins: apigateway.Cors.ALL_ORIGINS,
}

export interface RestApiEndpointHandler {
  functionName?: string
  authorizer?: apigateway.IAuthorizer
  functionProps: PartialRequired<NodejsFunctionProps, 'entry'>
  grantFunc?: (lambda: lambda.IFunction) => void
}

export type Method = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface RestApiEndpointProps {
  api: apigateway.RestApi
  path: string
  handlers: Partial<Record<Method, RestApiEndpointHandler>>
}

export class RestApiEndpoint extends Construct {
  public readonly handlers: Partial<Record<Method, lambda.IFunction>> = {}
  public readonly resource: apigateway.Resource

  constructor(scope: Construct, id: string, props: RestApiEndpointProps) {
    super(scope, id)

    // Add resource for the path
    this.resource = props.api.root.resourceForPath(props.path)

    // Only add CORS if it hasn't been added yet
    if (!this.resource.node.tryFindChild('OPTIONS')) {
      this.resource.addCorsPreflight(defaultPreflightOptions)
    }

    Object.entries(props.handlers).forEach(([method, handler]) => {
      const functionName = handler.functionName ?? `${id}${method}Handler`

      // Create the NodejsFunction
      const lambda = createNodejsFunction(
        scope,
        functionName,
        handler.functionProps,
      )

      this.resource.addMethod(
        method,
        new apigateway.LambdaIntegration(lambda),
        {
          authorizer: handler.authorizer,
        },
      )

      this.handlers[method as Method] = lambda

      if (handler.grantFunc) {
        handler.grantFunc(lambda)
      }
    })
  }
}
