import * as cdk from 'aws-cdk-lib'
import * as apigateway from 'aws-cdk-lib/aws-apigateway'
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront'
import { CloudFrontToApiGateway } from '@aws-solutions-constructs/aws-cloudfront-apigateway'
import { Construct } from 'constructs'
import { RestApiEndpoint } from './rest-api-endpoint'

export interface BackendStackProps extends cdk.StackProps {
  stage: 'prod' | 'dev' | 'test'
}

export class BackendStack extends cdk.Stack {
  public readonly apiUrl: string

  constructor(scope: Construct, id: string, props?: BackendStackProps) {
    super(scope, id, props)

    const STAGE = props?.stage || 'dev'
    // const isProduction = STAGE === 'prod'

    // API gateway
    const api = new apigateway.RestApi(this, 'TrustanaApi', {
      description: 'Chinese Quest API',
      deploy: true,
      deployOptions: {
        stageName: STAGE,
        metricsEnabled: true,
      },
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: apigateway.Cors.ALL_ORIGINS,
      },
      minCompressionSize: cdk.Size.kibibytes(0),
    })

    this.apiUrl = api.urlForPath('/')

    const chineseQuestApiCloudFrontCachePolicy = new cloudfront.CachePolicy(
      this,
      'TrustanaApiCloudFrontCachePolicy',
      {
        cachePolicyName: 'TrustanaApiCloudFrontCachePolicy',
        minTtl: cdk.Duration.minutes(5),
        defaultTtl: cdk.Duration.minutes(10),
        maxTtl: cdk.Duration.minutes(15),
        enableAcceptEncodingGzip: true,
        enableAcceptEncodingBrotli: true,
        queryStringBehavior: cloudfront.CacheQueryStringBehavior.all(),
        headerBehavior: cloudfront.CacheHeaderBehavior.allowList('Origin'),
      },
    )

    new CloudFrontToApiGateway(this, 'TrustanaApiDistribution', {
      existingApiGatewayObj: api,
      cloudFrontDistributionProps: {
        defaultBehavior: {
          allowOrigins: apigateway.Cors.ALL_ORIGINS,
          allowedMethods: cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
          cachePolicy: chineseQuestApiCloudFrontCachePolicy,
          viewerProtocolPolicy:
            cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
          allowCredentials: true,
        },
      },
    })

    new RestApiEndpoint(this, 'GetAttributesEndpoint', {
      api,
      path: '/api/v1/attributes',
      handlers: {
        GET: {
          functionName: 'GetAttributesHandler',
          functionProps: {
            entry: '../backend/src/lambda/api/get-attributes.ts',
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            environment: {
              STAGE,
            },
          },
        },
      },
    })

    new RestApiEndpoint(this, 'GetCategoryTreeEndpoint', {
      api,
      path: '/api/v1/categories/tree',
      handlers: {
        GET: {
          functionName: 'GetCategoryTreeHandler',
          functionProps: {
            entry: '../backend/src/lambda/api/get-category-tree.ts',
            memorySize: 128,
            timeout: cdk.Duration.seconds(10),
            environment: {
              STAGE,
            },
          },
        },
      },
    })
  }
}
