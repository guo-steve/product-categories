import { Logger, LogLevel } from '@aws-lambda-powertools/logger'

export const logger = new Logger({ logLevel: LogLevel.DEBUG })
