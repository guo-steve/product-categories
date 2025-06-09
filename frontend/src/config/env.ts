// Environment configuration
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api/v1',
  appName: import.meta.env.VITE_APP_NAME || 'Product Management Application',
  debug: import.meta.env.VITE_DEBUG === 'true',
} as const;

// Validate required environment variables
if (!config.apiBaseUrl) {
  throw new Error('VITE_API_BASE_URL is required but not defined in environment variables');
}

export default config;