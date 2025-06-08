import { describe, it } from 'vitest'
import { Context } from 'aws-lambda'
import { CreateTableCommand } from '@aws-sdk/client-dynamodb'
import { generateSecureKey } from '@chinese-quest/shared'
import { handler } from 'src/lambda/api/post-chat'
import { getDynamoDBClient } from 'src/lib/ddb-client'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any

describe('Chat API', () => {
  const CHAT_TABLE_NAME = `ChatTable-${generateSecureKey(10)}`

  beforeAll(async () => {
    // create table
    const db = getDynamoDBClient({ region: process.env.AWS_REGION })

    await db.send(
      new CreateTableCommand({
        TableName: CHAT_TABLE_NAME,
        AttributeDefinitions: [{ AttributeName: 'id', AttributeType: 'S' }],
        KeySchema: [{ AttributeName: 'id', KeyType: 'HASH' }],
        ProvisionedThroughput: {
          ReadCapacityUnits: 1,
          WriteCapacityUnits: 1,
        },
      }),
    )
  })

  it('post chat', async () => {
    process.env = {
      ...process.env,
      AWS_REGION: 'us-east-1',
      DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY,
      CHAT_TABLE_NAME,
    }

    const result = await handler(
      {
        httpMethod: 'POST',
        body: {
          message: 'Hello, how are you?',
        },
      } as Any,
      {} as Context,
    )
    console.log('result', result)
  }, 30_000)
})
