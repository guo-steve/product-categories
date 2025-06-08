import { GenericContainer, StartedTestContainer } from 'testcontainers'

const DDB_CONTAINER = 'amazon/dynamodb-local:latest'

const containers: StartedTestContainer[] = []

process.env.AWS_ACCESS_KEY_ID = 'test'
process.env.AWS_SECRET_ACCESS_KEY = 'test'

async function startDynamoDB() {
  const container = await new GenericContainer(DDB_CONTAINER)
    .withExposedPorts(8000)
    .start()

  process.env.AWS_ENDPOINT_URL_DYNAMODB = `http://${container.getHost()}:${container.getMappedPort(
    8000,
  )}`

  return container
}

beforeAll(async () => {
  containers.push(await startDynamoDB())
}, 30 * 1000)

afterAll(async () => {
  const stopPromises = containers.map((container) => container.stop())

  await Promise.all(stopPromises)
})
