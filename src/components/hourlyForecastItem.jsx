import React from "react";

const HourlyForecastItem = ({ time, temp, icon, description, animationDelay = 0 }) => {
  return (
    <div 
      style={{ ...itemStyle, animationDelay: `${animationDelay}s` }} 
      className="forecast-item"
      role="listitem"
      aria-label={`${time}: ${temp} degrees, ${description}`}
    >
      <div style={timeStyle} aria-hidden="true">{time}</div>
      <img src={icon} alt="" style={iconStyle} aria-hidden="true" />
      <div style={tempStyle} aria-hidden="true">{temp}°</div>
      <div style={descStyle} aria-hidden="true">{description}</div>
    </div>
  );
};

const itemStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  borderRight: "1px solid #eee",
};

const timeStyle = {
  fontSize: "0.9rem",
  fontWeight: "600",
  marginBottom: "5px",
};

const iconStyle = {
  width: "40px",
  height: "40px",
  marginBottom: "5px",
};

const tempStyle = {
  fontSize: "1rem",
  fontWeight: "700",
  marginBottom: "5px",
};

const descStyle = {
  fontSize: "1rem",
  color: "#ffffff",
};

export default HourlyForecastItem;