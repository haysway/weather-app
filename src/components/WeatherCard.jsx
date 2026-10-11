function WeatherCard({weather, isLoading, error}) {
    let content;

    if (isLoading) {
        content = <p>Loading weather data...</p>;
    } else if (error) {
        content = (
            <div role="alert">
                <h2>Could not load weather</h2>
                <p>Did you spell your city right?</p>
                <p>{error}</p>
            </div>
        );
    } else if (weather) {
        content = (
            <>
                <h2>{weather.name}</h2>
                <p>Temperature: {weather.main.temp}°F</p>
                <p>Feels like: {weather.main.feels_like}°F</p>
                <p>Conditions: {weather.weather[0].description}</p>
                <p>Humidity: {weather.main.humidity}%</p>
                <p>Wind: {weather.wind.speed} mph</p>
            </>
        );
    } else {
        content = <p>Enter a city to see its weather.</p>
    }

    return <div className="card">{content}</div>;
}

export default WeatherCard;