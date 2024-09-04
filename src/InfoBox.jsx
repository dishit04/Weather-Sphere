import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    let RAIN_URL = "https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let COLD_URL = "https://plus.unsplash.com/premium_photo-1670347626594-d60b7c3e2ba5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";

    
    let imageURL = info.humidity > 80
        ? RAIN_URL
        : info.temp > 15
        ? HOT_URL
        : COLD_URL;

    
    let weatherIcon = info.humidity > 80
        ? <ThunderstormIcon />
        : info.temp > 15
        ? <WbSunnyIcon />
        : <AcUnitIcon />;


    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={imageURL}
                        title="Weather Image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {weatherIcon}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <div>Temperature = {info.temp}&deg;C</div>
                            <div>Humidity = {info.humidity}</div>
                            <div>Min Temp = {info.tempMin}&deg;C</div>
                            <div>Max Temp = {info.tempMax}&deg;C</div>
                            <div>
                                The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
                            </div>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
