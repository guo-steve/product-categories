import { useState, useEffect } from 'react';
import { Attribute } from '../types';
import { fetchAttributes } from '../services/api';

export const useAttributes = () => {
  const [attributes, setAttributes] = useState<Attribute[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAttributes = async () => {
    try {
      setLoading(true);
      setError(null);
      const attributes = await fetchAttributes();
      setAttributes(attributes);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch attributes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAttributes();
  }, []);

  return {
    attributes,
    loading,
    error,
    refetch: loadAttributes,
  };
};
