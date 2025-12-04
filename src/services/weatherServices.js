import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHERAPI_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

if (!API_KEY) {
  console.error('REACT_APP_WEATHERAPI_KEY is not set. Please configure it in your environment variables.');
}

export const fetchWeather = async (city) => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured. Please set REACT_APP_WEATHERAPI_KEY in your environment variables.');
  }
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: city,
        aqi: 'yes'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching current weather:', error);
    throw error;
  }
};

export const fetchForecast = async (city, days = 7) => {
  if (!API_KEY) {
    throw new Error('Weather API key is not configured. Please set REACT_APP_WEATHERAPI_KEY in your environment variables.');
  }
  try {
    const response = await axios.get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: days,
        aqi: 'yes'
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching forecast:', error);
    throw error;
  }
};