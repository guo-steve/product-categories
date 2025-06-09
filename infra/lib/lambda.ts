import { Construct } from 'constructs'
import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import {
  NodejsFunction,
  NodejsFunctionProps,
  SourceMapMode,
} from 'aws-cdk-lib/aws-lambda-nodejs'

export type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>
export type PartialRequired<T, K extends keyof T> = Pick<Required<T>, K> &
  Omit<T, K>

const DEFAULT_RUNTIME = lambda.Runtime.NODEJS_20_X
const DEFAULT_ARCHITECTURE = lambda.Architecture.ARM_64
const DEFAULT_TIMEOUT = cdk.Duration.seconds(15)
const DEFAULT_MEMORY_SIZE = 256

export function createNodejsFunction(
  scope: Construct,
  id: string,
  props?: PartialRequired<NodejsFunctionProps, 'entry'>,
): NodejsFunction {
  const environment = props?.environment ?? {}
  environment.POWERTOOLS_SERVICE_NAME ??= id
  environment.NODE_OPTIONS ??= '--enable-source-maps'

  return new NodejsFunction(scope, id, {
    entry: props?.entry,
    handler: props?.handler ?? 'handler',
    runtime: DEFAULT_RUNTIME,
    vpc: props?.vpc,
    vpcSubnets: props?.vpcSubnets,
    securityGroups: props?.securityGroups,
    architecture: props?.architecture ?? DEFAULT_ARCHITECTURE,
    environment,
    timeout: props?.timeout ?? DEFAULT_TIMEOUT,
    memorySize: props?.memorySize ?? DEFAULT_MEMORY_SIZE,
    bundling: {
      sourceMap: true,
      sourceMapMode: SourceMapMode.DEFAULT,
    },
  })
}
