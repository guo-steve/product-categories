import { useState, useEffect, useCallback } from 'react'
import { Attribute } from '../types'
import { AttributeFilter, fetchAttributes } from '../services/api'

export const useAttributes = (filter: AttributeFilter) => {
  const [attributes, setAttributes] = useState<Attribute[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 10,
    totalCount: 0,
  })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadAttributes = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const result = await fetchAttributes(filter)
      setAttributes(result.data)
      setPagination(result.pagination)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch attributes',
      )
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => {
    loadAttributes()
  }, [loadAttributes])

  return {
    attributes,
    pagination,
    loading,
    error,
    refetch: loadAttributes,
  }
}
