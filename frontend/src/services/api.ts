import axios from 'axios';
import { Attribute, Category } from '../types';

const API_BASE_URL = 'http://localhost:8000/api/v1';

export const fetchAttributes = async (): Promise<Attribute[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/attributes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching attributes:', error);
    return [];
  }
};

export const fetchCategoryTree = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/categories/tree`);
    return response.data;
  } catch (error) {
    console.error('Error fetching category tree:', error);
    return [];
  }
};
