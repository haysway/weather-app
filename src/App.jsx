import { useState } from 'react'
import './App.css'

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState([]);

  const cityChangeHandler = (event) => {
    setCity(event.target.value);
  }

  const searchHandler = async (event) => {
    event.preventDefault();

    // api call here
  }

  return (
    <>
      <h1>Weather App</h1>

      <CityForm />

      <WeatherCard/>
    </>
  )
}

export default App;
