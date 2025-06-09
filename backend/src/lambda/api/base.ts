// utils/baseHandler.js
import middy, { Request } from '@middy/core'
import {
  Handler,
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
} from 'aws-lambda'
import httpJsonBodyParser from '@middy/http-json-body-parser'
import httpErrorHandler from '@middy/http-error-handler'
import { injectLambdaContext } from '@aws-lambda-powertools/logger/middleware'
import httpCors from '../../lib/cors'
import { logger } from '../../lib/logger'

const httpResponseHeaders = (defaultHeaders = {}) => ({
  after: async (req: Request) => {
    if (req.response) {
      req.response.headers = {
        ...defaultHeaders,
        ...req.response.headers, // Allow overriding defaults
      }
    }
  },
})

export const createHandler = (
  handler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult>,
) => {
  return middy(handler)
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
    .use(
      httpResponseHeaders({
        'Content-Type': 'application/json',
      }),
    )
}
