import React, { useRef, useEffect } from "react";
import HourlyForecastItem from "./hourlyForecastItem";

const HourlyForecast = ({ data }) => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, []);

  if (!data || data.length === 0) return <div>No hourly data</div>;

  const now = new Date();
  const currentHour = now.getHours();

  const filteredHours = data.filter((hour) => {
    const hourTime = new Date(hour.time);
    return hourTime.getHours() >= currentHour;
  });

  const hourlyData = filteredHours.slice(0, 12);

  return (
    <section className="forecast__card" aria-label="Hourly weather forecast">
      <h3>Hourly Forecast</h3>
      <div 
        className="forecast-list" 
        ref={scrollContainerRef}
        role="list"
        aria-label="Hourly weather forecast list"
        tabIndex={0}
        aria-orientation="horizontal"
      >
        {hourlyData.map((hour, index) => (
          <HourlyForecastItem
            key={index}
            time={hour.time.split(' ')[1]}
            temp={Math.round(hour.temp_f)}
            icon={hour.condition.icon}
            description={hour.condition.text}
            animationDelay={index * 0.05}
          />
        ))}
      </div>
    </section>
  );
};

export default HourlyForecast;
