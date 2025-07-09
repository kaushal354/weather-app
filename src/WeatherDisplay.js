import React, { useState } from 'react';
import axios from 'axios';
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiThunderstorm, WiFog, WiDayCloudy, WiNightClear, WiNightCloudy } from 'react-icons/wi';
import styles from './WeatherDisplay.module.css'; // Import CSS module
import glassStyles from './GlassCard.module.css'; // Import GlassCard styles

const WeatherDisplay = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // IMPORTANT: Replace with your OpenWeatherMap API key
  const API_KEY = '44c884f955294b37db0a175edac8e4dd'; 

  const getWeatherIcon = (iconCode) => {
    switch (iconCode) {
      case '01d': return <WiDaySunny />;
      case '01n': return <WiNightClear />;
      case '02d': return <WiDayCloudy />;
      case '02n': return <WiNightCloudy />;
      case '03d':
      case '03n':
      case '04d':
      case '04n': return <WiCloudy />;
      case '09d':
      case '09n':
      case '10d':
      case '10n': return <WiRain />;
      case '11d':
      case '11n': return <WiThunderstorm />;
      case '13d':
      case '13n': return <WiSnow />;
      case '50d':
      case '50n': return <WiFog />;
      default: return <WiDaySunny />;
    }
  };

  const fetchWeather = async () => {
    setLoading(true);
    setError('');
    setWeatherData(null);
    setForecastData(null);
    try {
      const currentWeatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(currentWeatherResponse.data);

      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      // Filter to get one entry per day (around noon)
      const dailyForecasts = forecastResponse.data.list.filter(item =>
        item.dt_txt.includes('12:00:00')
      );
      setForecastData(dailyForecasts);

    } catch (err) {
      setError('City not found or API error. Please check the city name and your API key.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      fetchWeather();
    } else {
      setError('Please enter a city name.');
    }
  };

  return (
    <div className={styles['weather-display-container']}>
      <h1 className={styles['text-center']}>Weather Forecast</h1>
      <form onSubmit={handleSubmit} className={styles['search-form']}>
        <input
          type="text"
          className={styles['search-input']}
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit" className={styles['search-button']}>
          Get Weather
        </button>
      </form>

      {loading && <div className={styles['loading-spinner']}></div>}
      {error && <div className={styles['alert-danger']}>{error}</div>}

      {weatherData && (
        <div className={`${styles['weather-card']} ${glassStyles['glass-card']}`}>
          <h2 className={styles['card-title']}>{weatherData.name}, {weatherData.sys.country}</h2>
          <div className={styles['weather-icon']}>
            {getWeatherIcon(weatherData.weather[0].icon)}
          </div>
          <p className={styles['temperature']}>{Math.round(weatherData.main.temp)}°C</p>
          <p className={styles['condition']}>{weatherData.weather[0].description}</p>
          <div className={styles['weather-details']}>
            <p>Humidity: {weatherData.main.humidity}%</p>
            <p>Wind Speed: {weatherData.wind.speed} m/s</p>
          </div>
        </div>
      )}

      {forecastData && forecastData.length > 0 && (
        <div className={styles['forecast-section']}>
          <h3 className={styles['text-center']}>5-Day Forecast</h3>
          <div className={styles['forecast-grid']}>
            {forecastData.map((day, index) => (
              <div key={index} className={`${styles['forecast-card']} ${glassStyles['glass-card']}`}>
                <p className={styles['day']}>{new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
                <div className={styles['forecast-icon']}>
                  {getWeatherIcon(day.weather[0].icon)}
                </div>
                <p className={styles['temp']}>{Math.round(day.main.temp)}°C</p>
                <small>{day.weather[0].description}</small>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;