import type { Knex } from 'knex'
import { config as dotenvConfig } from 'dotenv'

const env = process.env.NODE_ENV || 'development'

dotenvConfig() // load default .env file

dotenvConfig({
  path: `.env.${env}`,
})

const config: { [key: string]: Knex.Config } = {
  [env]: {
    client: 'postgresql',
    connection: {
      database: process.env.DB_NAME!,
      user: process.env.DB_USER!,
      password: process.env.DB_PASSWORD!,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

module.exports = config
