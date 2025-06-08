import OpenAI from 'openai'
import { describe, it, beforeAll, expect } from 'vitest'
import { createClient, createCompletion, getModels } from 'src/lib/ai/deepseek'

describe('deepseek', () => {
  let deepseek: OpenAI | null = null

  beforeAll(() => {
    const apiKey = process.env.USE_REAL_KEY
      ? process.env.DEEPSEEK_API_KEY!
      : 'FAKED'
    deepseek = createClient(apiKey)
  })

  it('createCompletion', async () => {
    const chat = createCompletion(deepseek!)

    const result = await chat({
      model: 'deepseek-chat',
      messages: [
        {
          role: 'user',
          content: 'Hello, how are you?',
        },
      ],
    })

    expect(result).toBeDefined()

    console.log('Chat Completion:', result)
  }, 10_000)

  it('models', async () => {
    const models = getModels(deepseek!)

    const result = await models()

    console.log('Models:', result)
  })
})
