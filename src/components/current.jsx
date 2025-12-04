import React from "react";
import "../index.css";
import { Sun, Cloud, CloudRain, Wind, Eye, Droplets, CloudSnow } from "lucide-react";

const Current = ({ data }) => {
  if (!data) return <div>No current weather data</div>;

  const current = data.current;
  const location = data.location;

  
  const getWeatherIcon = () => {
    const condition = current.condition.text.toLowerCase();
    const iconProps = {
      size: 125,
      strokeWidth: 1.5,
      style: { filter: "drop-shadow(0 0 1px black)" }
    };

    if (condition.includes("sunny") || condition.includes("clear")) {
      return <Sun {...iconProps} color="yellow" />;
    } else if (condition.includes("cloudy") || condition.includes("overcast")) {
      return <Cloud {...iconProps} color="#999" />;
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      return <CloudRain {...iconProps} color="#4a90e2" />;
    } else if (condition.includes("snow")) {
      return <CloudSnow {...iconProps} color="#b3d9ff" />;
    } else if (condition.includes("wind")) {
      return <Wind {...iconProps} color="#666" />;
    } else if (condition.includes("fog") || condition.includes("mist")) {
      return <Eye {...iconProps} color="#999" />;
    } else {
      return <Sun {...iconProps} color="yellow" />;
    }
  };

  const getWeatherQuote = () => {
    const condition = current.condition.text.toLowerCase();

    if (condition.includes("sunny") || condition.includes("clear")) {
      return "☀️ What a beautiful day! Time to shine bright!";
    } else if (condition.includes("cloudy") || condition.includes("overcast")) {
      return "☁️ A bit overcast today, but it's cozy!";
    } else if (condition.includes("rain") || condition.includes("drizzle")) {
      return "🌧️ Rain brings life to the world. Stay dry!";
    } else if (condition.includes("snow")) {
      return "❄️ Winter wonderland! Stay warm!";
    } else if (condition.includes("wind")) {
      return "💨 Breezy day! Hold on to your hat!";
    } else if (condition.includes("fog") || condition.includes("mist")) {
      return "🌫️ The world is mysterious today. Take it slow!";
    } else {
      return "🌤️ What a day!";
    }
  };

  return (
    <section className="current" aria-label="Current weather conditions">
      <div className="current__content">
        <div className="current__quote" role="note" aria-label="Weather quote">
          <p>{getWeatherQuote()}</p>
        </div>
        <div className="current__info">
          <h2 className="location" aria-label="Location">{location.name}, {location.region}</h2>
          <div className="temp" aria-label={`Temperature: ${Math.round(current.temp_f)} degrees Fahrenheit`}>
            {Math.round(current.temp_f)}°
          </div>
          <div className="condition" aria-label={`Weather condition: ${current.condition.text}`}>
            {current.condition.text}
          </div>
          <div className="feels__like" aria-label={`Feels like ${Math.round(current.feelslike_f)} degrees Fahrenheit`}>
            Feels like {Math.round(current.feelslike_f)}°
          </div>
          <div className="humidity" aria-label={`Humidity: ${current.humidity} percent`}>
            Humidity: {current.humidity}%
          </div>
          <div className="wind" aria-label={`Wind: ${current.wind_dir} at ${Math.round(current.wind_mph)} miles per hour`}>
            Wind: {current.wind_dir} {Math.round(current.wind_mph)} mph
          </div>
        </div>
        <div className="current__icon" aria-hidden="true">
          {getWeatherIcon()}
        </div>
      </div>
    </section>
  );
};

export default Current;