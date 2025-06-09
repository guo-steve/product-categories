import { Pool } from 'pg'
import { config as dotenvConfig } from 'dotenv'

const env = process.env.NODE_ENV || 'development'

dotenvConfig() // load default .env file

dotenvConfig({
  path: `.env.${env}`,
})

/**
 * Creates and returns a PostgreSQL Pool instance.
 * @returns {Pool} A configured PostgreSQL Pool.
 */
export function getPgPool(): Pool {
  const dbConfig = process.env.DATABASE_URL
    ? {
        connectionString: process.env.DATABASE_URL,
      }
    : {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
      }

  return new Pool(dbConfig)
}
