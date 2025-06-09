import { APIGatewayEvent } from 'aws-lambda'
import { z } from 'zod'
import { getPgPool } from '../../lib/pg-client'
import { AttributeRepository } from '../../lib/repository/attribute.repository'
import { PgAttributeRepository } from '../../lib/repository/pg/attribute.pg'
import { createHandler } from './base'

export const GetAttributesSchema = z.object({
  page: z.number().optional(),
  pageSize: z.number().optional(),
  like: z.string().optional(),
  orderBy: z.enum(['name-asc', 'name-desc']).optional(),
})

export const getAttributes = async (event: APIGatewayEvent) => {
  const parseResult = GetAttributesSchema.safeParse(
    event.queryStringParameters || {},
  )

  if (!parseResult.success) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: 'Invalid query parameters',
        errors: parseResult.error.errors,
      }),
    }
  }

  const pgPool = getPgPool()

  const attributeRepo: AttributeRepository = new PgAttributeRepository(pgPool)

  const attributes = await attributeRepo.listAttributes()

  return {
    statusCode: 200,
    body: JSON.stringify(attributes),
  }
}

export const handler = createHandler(getAttributes)
