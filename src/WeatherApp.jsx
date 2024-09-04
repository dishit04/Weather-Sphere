import React, { useState } from 'react';
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./WeatherApp.css";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "WonderLand",
        feelslike: 24.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
    });

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <div className="weather-app-container">
            <h2 className="weather-app-title">WeatherSphere App</h2>
            <p className="weather-app-description">Your go-to app for accurate and up-to-date weather information.</p>
            <div className="weather-app-content">
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </div>
        </div>
    );
}

