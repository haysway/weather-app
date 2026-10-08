import { useState } from 'react'
import CityForm from './components/CityForm'
//import WeatherCard from './components/WeatherCard'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null);

  const citySubmitHandler = (city) => {
    // api calls will be here
  }

  return (
    <>
      <h1>Weather App</h1>

      <CityForm onCitySubmit={citySubmitHandler}/>

    </>
  )
}

export default App;
