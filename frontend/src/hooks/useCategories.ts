import { useState, useEffect } from 'react'
import { Category } from '../types'
import { fetchCategoriesTree } from '../services/api'

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const loadCategories = async () => {
    try {
      setLoading(true)
      setError(null)
      const categories = await fetchCategoriesTree()
      setCategories(categories)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to fetch categories',
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCategories()
  }, [])

  return {
    categories,
    loading,
    error,
    refetch: loadCategories,
  }
}
