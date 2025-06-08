/// <reference types="vitest" />
//
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // enables 'describe', 'it', 'expect' without imports
    environment: 'node', // use Node.js test environment
    include: [
      'test/**/*.test.ts',
      'test/**/*.e2e.test.ts', // explicitly include E2E files
    ],
    setupFiles: ['test/setup.ts', 'test/setup.e2e.ts'], // optional, for AWS profile or global mocks
  },
})
