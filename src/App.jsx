import { useState, useCallback } from 'react'
import CityForm from './components/CityForm'
import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCityData = useCallback(async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)},US&units=imperial&appid=a79110b362fa56cdb73f39f05b44f5dd`
      );
      
      if (!response.ok) {
        throw new Error(`Error! Status: ${response.status}`);
      }

      const data = await response.json();
      const weatherData = [];

      // I get all the data, and just show what I want to in the WeatherCard

      setWeather(data);
    } 
    catch(e) {
      setError(e.message);
    }

    setIsLoading(false);
  }, []);

  const citySubmitHandler = (city) => {
    fetchCityData(city);
  }

  let content = <p>No weather data avaliable.</p>;

  if (weather) {
    content = <WeatherCard weather={weather} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading weather data...</p>;
  }

  return (
    <>
      <h1>Weather App</h1>

      <CityForm onCitySubmit={citySubmitHandler}/>

      <section>{content}</section>
    </>
  )
}

export default App;