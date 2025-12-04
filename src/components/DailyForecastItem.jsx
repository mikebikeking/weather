import React from "react";

const DailyForecastItem = ({ day, high, low, icon, description, animationDelay = 0 }) => {
  const highF = Math.round((high * 9/5) + 32);
  const lowF = Math.round((low * 9/5) + 32);

  return (
    <div 
      style={{ ...itemStyle, animationDelay: `${animationDelay}s` }} 
      className="forecast-item"
      role="listitem"
      aria-label={`${day}: High ${highF} degrees, Low ${lowF} degrees, ${description}`}
    >
      <div style={dayStyle} aria-hidden="true">{day}</div>
      <img src={icon} alt="" style={iconStyle} aria-hidden="true" />
      <div style={tempStyle} aria-hidden="true">
        <span style={highStyle}>{highF}°</span>
        <span style={lowStyle}>{lowF}°</span>
      </div>
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

const dayStyle = {
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
  fontSize: "0.9rem",
  marginBottom: "5px",
};

const highStyle = {
  fontWeight: "700",
  marginRight: "5px",
};

const lowStyle = {
  color: "#ffffffff",
};

const descStyle = {
  fontSize: "1rem",
  color: "#ffffff",
};

export default DailyForecastItem;