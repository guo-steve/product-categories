import { beforeAll, afterAll } from 'vitest'

beforeAll(() => {
  console.log('Setting up test environment...')
  console.log('AWS_PROFILE', process.env.AWS_PROFILE)
  process.env.NODE_ENV = 'test'
})

afterAll(() => {
  // ...
})
