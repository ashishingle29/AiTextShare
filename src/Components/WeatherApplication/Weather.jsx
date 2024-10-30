import React, { useState } from 'react';
import './Weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = (city) => {
    const API_KEY = '4eee360a067ed73973424336fd538daf'; // Replace with your API key
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        if (data.cod === 200) {
          setWeatherData(data);
          setError(''); // Clear any previous error
        } else {
          setError('City not found. Please try another city.');
          setWeatherData(null);
        }
      })
      .catch(() => {
        setError('Failed to fetch weather data.');
        setWeatherData(null);
      });
  };

  const handleSearchClick = () => {
    if (city.trim() !== '') {
      fetchWeatherData(city);
    }
  };

  return (
    <div className="container">
      <h1>Weather Application</h1>
      <div className="search-container">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          id="search-input"
        />
        <button id="search-button" onClick={handleSearchClick}>Search</button>
      </div>

      <div id="weather-data">
        {error && <p className="error">{error}</p>}
        {weatherData && (
          <div>
            <h2>{weatherData.name}</h2>
            <p>Temperature: {weatherData.main.temp} &#8451;</p>
            <p>Description: {weatherData.weather[0].description}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Weather;
