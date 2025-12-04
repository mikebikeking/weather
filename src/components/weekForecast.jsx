import React, { useRef, useEffect } from "react";
import DailyForecastItem from "./DailyForecastItem";

const WeekForecast = ({ data }) => {
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

  if (!data || data.length === 0) return <div>No forecast data</div>;

  // Filter out past dates and get the next 7 days
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to start of day for accurate comparison

  const next7Days = data
    .filter((day) => {
      const dayDate = new Date(day.date);
      dayDate.setHours(0, 0, 0, 0);
      return dayDate >= today; // Include today and future days
    })
    .slice(0, 7); // Take only the first 7 days

  return (
    <section className="forecast__card" aria-label="7-day weather forecast">
      <h2>7-Day Forecast</h2>
      <div 
        className="forecast-list" 
        ref={scrollContainerRef}
        role="list"
        aria-label="7-day weather forecast list"
        tabIndex={0}
        aria-orientation="horizontal"
      >
        {next7Days.map((day, index) => (
          <DailyForecastItem
            key={index}
            day={new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            high={Math.round(day.day.maxtemp_c)}
            low={Math.round(day.day.mintemp_c)}
            icon={day.day.condition.icon}
            description={day.day.condition.text}
            animationDelay={index * 0.1}
          />
        ))}
      </div>
    </section>
  );
};

export default WeekForecast;