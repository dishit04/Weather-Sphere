import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const API_URL = import.meta.env.VITE_API_URL;
    const API_KEY = import.meta.env.VITE_API_KEY;


    const getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();

            if (response.ok) {
                return {
                    city: city,
                    temp: jsonResponse.main.temp,
                    tempMin: jsonResponse.main.temp_min,
                    tempMax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelslike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description,
                };
            } else {
                throw new Error(jsonResponse.message || "An error occurred");
            }
        } catch (err) {
            setError(err.message || "An unexpected error occurred");
            return null;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(""); // Clear previous errors

        const newInfo = await getWeatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity(""); 
        }
    };

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br/><br/>
                <Button variant="contained" type='submit'>Send</Button>
                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
}
