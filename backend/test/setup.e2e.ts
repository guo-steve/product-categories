import { GenericContainer, StartedTestContainer } from 'testcontainers'
import { beforeAll, afterAll } from 'vitest'
import knex from 'knex'

const DB_CONTAINER = 'postgres:14.18-alpine'
const DB_PORT = 5432
const DB_NAME = 'testdb'
const DB_USER = 'testuser'
const DB_PASSWORD = 'testpass'

const containers: StartedTestContainer[] = []

process.env.AWS_ACCESS_KEY_ID = 'test'
process.env.AWS_SECRET_ACCESS_KEY = 'test'

async function startDB() {
  const container = await new GenericContainer(DB_CONTAINER)
    .withEnvironment({
      POSTGRES_DB: DB_NAME,
      POSTGRES_USER: DB_USER,
      POSTGRES_PASSWORD: DB_PASSWORD,
    })
    .withExposedPorts(DB_PORT)
    .start()

  process.env.DATABASE_URL = `postgresql://${DB_USER}:${DB_PASSWORD}@${container.getHost()}:${container.getMappedPort(
    DB_PORT,
  )}/${DB_NAME}`

  return container
}

beforeAll(async () => {
  containers.push(await startDB())

  await initTestData()

  console.log('Test database initialized with URL:', process.env.DATABASE_URL)
}, 30_000)

afterAll(async () => {
  const stopPromises = containers.map((container) => container.stop())

  await Promise.all(stopPromises)
})

async function initTestData() {
  const db = knex({
    client: 'postgresql',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/../migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: __dirname + '/../seeds', // adjust if needed
    },
  })

  // create tables
  await db.migrate.up()

  await db.seed.run()

  await db.destroy()
}
