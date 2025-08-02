import axios from 'axios';

const API_BASE_URL = 'https://api.nasa.gov/planetary/apod';
const API_KEY = import.meta.env.VITE_NASA_API_KEY;

export const nasaApi = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getApodData = async (options) => {
  try {
    const params = options ? { options } : {};
    const response = await nasaApi.get('', { params });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error?.message || 'Failed to fetch APOD data');
  }
};
