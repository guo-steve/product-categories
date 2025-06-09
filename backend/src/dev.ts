import express, { Request, Response, NextFunction } from 'express'
import { APIGatewayEvent, Context, Handler } from 'aws-lambda'
import { handler as getCategoryTree } from './lambda/api/get-category-tree'
import { handler as getAttributes } from './lambda/api/get-attributes'

process.env = {
  ...process.env,
  AWS_REGION: 'us-east-1',
  CHAT_TABLE_NAME: 'test-chat-table',
}

const app = express()

app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' })
})

// app.get('/api/v1/ping', wrapLambdaHandler(ping))

// todo: add more routes
app.get('/api/v1/categories/tree', wrapLambdaHandler(getCategoryTree))
app.get('/api/v1/attributes', wrapLambdaHandler(getAttributes))

app.listen(8000, () => {
  console.log('Server is running on http://localhost:8000')
})

/**
 * Wraps an AWS Lambda handler into an Express.js middleware.
 * @param handler The AWS Lambda handler function.
 * @returns An Express.js middleware function.
 */
export function wrapLambdaHandler(handler: Handler) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Transform Express.js request to APIGatewayEvent
      const event = {
        httpMethod: req.method,
        headers: req.headers as Record<string, string>,
        path: req.path,
        queryStringParameters: req.query as Record<string, string>,
        body: req.body ? JSON.stringify(req.body) : null,
        isBase64Encoded: false,
        requestContext: {
          // todo: add more properties as needed
        },
        resource: req.path,
        pathParameters: req.params,
        stageVariables: {},
      } as APIGatewayEvent

      // Mock Lambda context
      const context: Context = {
        callbackWaitsForEmptyEventLoop: false,
        functionName: 'express-wrapper',
        functionVersion: '1',
        invokedFunctionArn: 'arn:aws:lambda:mock',
        memoryLimitInMB: '128',
        awsRequestId: 'mock-request-id',
        logGroupName: 'mock-log-group',
        logStreamName: 'mock-log-stream',
        getRemainingTimeInMillis: () => 5000,
        done: () => {},
        fail: () => {},
        succeed: () => {},
      }

      // Invoke the Lambda handler
      const result = await handler(event, context, () => {})

      // Handle the Lambda response
      if (result) {
        res.status(result.statusCode || 200)
        if (result.headers) {
          Object.entries(result.headers).forEach(([key, value]) => {
            res.setHeader(key, value as string)
          })
        }
        res.send(result.body)
      } else {
        res.status(200).send()
      }
    } catch (error) {
      console.error('Error handling request:', error)
      next(error)
    }
  }
}
