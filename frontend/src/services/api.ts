const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

export const fetchFromApi = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_URL}${endpoint}`, options);
  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }
  return response.json();
};
