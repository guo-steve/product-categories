export type OrderBy<T> = {
  field: keyof T
  direction: 'asc' | 'desc'
}

export interface PagingatedResult<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    hasNextPage: boolean
  }
}
