import { APIGatewayEvent } from 'aws-lambda'
import { z } from 'zod'
import { getPgPool } from '../../lib/pg-client'
import { AttributeRepository } from '../../lib/repository/attribute.repository'
import { PgAttributeRepository } from '../../lib/repository/pg/attribute.pg'
import { createHandler } from './base'
import { Attribute, sortableFields } from '../../lib/entity/attribute.entity'

export const GetAttributesSchema = z.object({
  page: z.coerce.number().optional(),
  pageSize: z.coerce.number().optional(),
  nameLike: z.string().optional(),
  categories: z
    .string()
    .optional()
    .refine((val) => !val || val.split(',').every((v) => v.match(/^\d+$/)), {
      message: 'Categories must be a comma-separated list category IDs',
    })
    .transform((val) => (val ? val.split(',') : undefined)),
  linkTypes: z
    .string()
    .optional()
    .refine(
      (val) =>
        !val ||
        val.split('+').every((v) => v.match(/^(global|inherited|direct)$/)),
    )
    .transform((val) =>
      val
        ? val.split('+').reduce((a, c) => ({ ...a, [c]: true }), {})
        : undefined,
    ),
  orderBy: z
    .enum(
      sortableFields.map((f) => [`${f}:asc`, `${f}:desc`]).flat() as [
        string,
        ...string[],
      ],
    )
    .optional(),
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

  const orderBy = parseResult.data.orderBy?.split(':')

  const filter = {
    page: parseResult.data.page,
    pageSize: parseResult.data.pageSize,
    nameLike: parseResult.data.nameLike,
    categories: parseResult.data.categories,
    linkTypes: parseResult.data.linkTypes,
    orderBy: orderBy
      ? {
          field: orderBy[0] as keyof Omit<Attribute, 'id'>,
          direction: orderBy[1] as 'asc' | 'desc',
        }
      : orderBy,
  }

  const pgPool = getPgPool()

  const attributeRepo: AttributeRepository = new PgAttributeRepository(pgPool)

  const attributes = await attributeRepo.listAttributes(filter)

  return {
    statusCode: 200,
    body: JSON.stringify(attributes),
  }
}

export const handler = createHandler(getAttributes)
