import middy from '@middy/core'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpErrorHandler from '@middy/http-error-handler'
import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware'
import { APIGatewayEvent } from 'aws-lambda'
import { logger } from '../../lib/logger'
import httpCors from '../../lib/cors'
import { getPgPool } from '../../lib/pg-client'
import { PgCategoryRepository } from '../../lib/repository/pg/category.pg'

export const getCategoryTree = async (event: APIGatewayEvent) => {
  const pgPool = getPgPool()

  const categoryRepo = new PgCategoryRepository(pgPool)

  const categories = await categoryRepo.getCategoryTree()

  return {
    statusCode: 200,
    body: JSON.stringify(categories),
  }
}

export const handler = middy(getCategoryTree)
  .use(injectLambdaContext(logger, { logEvent: true }))
  .use(
    httpJsonBodyParser({
      disableContentTypeError: true,
    }),
  )
  .use(httpCors())
  .use(
    httpErrorHandler({
      logger: logger.error.bind(logger),
    }),
  )
