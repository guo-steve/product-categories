import { describe, it, beforeAll } from 'vitest'
import { Context } from 'aws-lambda'
import { handler } from '../../../src/lambda/api/get-attributes'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any

describe('attributes', () => {
  beforeAll(async () => {
    // insert test data?
    console.log(process.env.DATABASE_URL)
  })

  it('get attributes', async () => {
    const result = await handler(
      {
        httpMethod: 'GET',
      } as Any,
      {} as Context,
    )
    console.log('result', result)
  }, 30_000)
})
