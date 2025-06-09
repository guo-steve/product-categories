import { APIGatewayEvent } from 'aws-lambda'
import { z } from 'zod'
import { getPgPool } from '../../lib/pg-client'
import { PgCategoryRepository } from '../../lib/repository/pg/category.pg'
import { createHandler } from './base'

export const GetCategoryTreeSchema = z.object({
  includeProducts: z.boolean().optional(),
  includeAttributes: z.boolean().optional(),
})

export const getCategoryTree = async (event: APIGatewayEvent) => {
  const parseResult = GetCategoryTreeSchema.safeParse(
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

  const categoryRepo = new PgCategoryRepository(pgPool)

  const categories = await categoryRepo.getCategoryTree()

  return {
    statusCode: 200,
    body: JSON.stringify(categories),
  }
}

export const handler = createHandler(getCategoryTree)
