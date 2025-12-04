import './index.css';
import { useState, useEffect } from 'react';
import Nav from './components/nav.jsx';
import Current from './components/current.jsx';
import HourlyForecast from './components/hourlyForecast.jsx';
import WeekForecast from './components/weekForecast.jsx';
import { fetchWeather, fetchForecast } from './services/weatherServices.js';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState('Boston');

  useEffect(() => {
    const getWeatherData = async () => {
      setLoading(true);
      setError(null);
      try {
        const current = await fetchWeather(city);
        const forecastData = await fetchForecast(city, 8);
        setCurrentWeather(current);
        setForecast(forecastData);
      } catch (err) {
        if (err.message && err.message.includes('API key')) {
          setError('Weather API key is not configured. Please check your environment variables.');
        } else if (err.response?.status === 401) {
          setError('Invalid API key. Please check your Weather API key configuration.');
        } else {
          setError('Failed to fetch weather data. Please try again later.');
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getWeatherData();
  }, [city]);

  const handleSearch = (searchCity) => {
    setCity(searchCity);
  };

  if (loading) return (
    <div className="App" role="main">
      <div className="loading" role="status" aria-live="polite" aria-label="Loading weather data">
        Loading weather data...
      </div>
    </div>
  );
  
  if (error) return (
    <div className="App" role="main">
      <div className="error" role="alert" aria-live="assertive">
        {error}
      </div>
    </div>
  );

  return (
    <div className="App" role="main">
      <Nav onSearch={handleSearch} />
      {currentWeather && <Current data={currentWeather} />}
      {forecast && (
        <div className="forecast__container" aria-label="Weather forecasts">
          <HourlyForecast data={forecast.forecast.forecastday[0].hour} />
          <WeekForecast data={forecast.forecast.forecastday} />
        </div>
      )}
    </div>
  );
}

export default App;