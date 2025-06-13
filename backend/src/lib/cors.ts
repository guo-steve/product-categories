import cors, { type Options } from '@middy/http-cors'

export default (options?: Options) => {
  return cors({
    ...options,
    credentials: true,
    origins: ['http://localhost:5173', 'https://d3mpiib4rdbw4x.cloudfront.net'],
  })
}
