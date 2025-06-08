import cors, { type Options } from '@middy/http-cors'

export default (options?: Options) => {
  return cors({
    ...options,
    credentials: true,
    origins: ['http://localhost:8081'],
  })
}
