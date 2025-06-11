import { Pool } from 'pg'
import { Any } from '../../../types'

export async function fetchCount(pgPool: Pool, query: string, params: Any[]) {
  const countQuery = `
    SELECT COUNT(*) AS count
    FROM (${query}) AS t
  `

  const countResult = await pgPool.query(countQuery, params)

  return countResult.rows[0].count
}
