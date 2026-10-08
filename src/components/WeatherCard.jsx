function WeatherCard(props) {
    return(
        <div className="card">
            <h2>{props.weather.name}</h2>
            <p>Temperature: {props.weather.main.temp}°F</p>
            <p>Feels like: {props.weather.main.feels_like}°F</p>
            <p>Conditions: {props.weather.weather[0].description}</p>
            <p>Humidity: {props.weather.main.humidity}%</p>
            <p>Wind: {props.weather.wind.speed} mph</p>
        </div>
    );
}

export default WeatherCard;