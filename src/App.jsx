import React from 'react';
import WeatherApp from "./WeatherApp";
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <div className="app-content">
        <WeatherApp />
        <div className="app-footer">
          <p >Powered by WeatherSphere App</p>
        </div>
      </div>
    </div>
  );
}

export default App;


