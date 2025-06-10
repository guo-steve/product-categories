export type OrderBy<T> = {
  field: keyof T
  direction: 'asc' | 'desc'
}

export interface PagingatedResult<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    totalCount: number
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any
