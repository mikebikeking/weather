import React from "react";

function ForecastItem({ time, temp, icon, description }) {
  return (
    <div className="forecast-item" style={styles.item}>
      <p style={styles.time}>{time}</p>
      <div style={styles.icon}>{icon}</div>
      <p style={styles.temp}>{temp}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    marginRight: "10px",
    minWidth: "100px",
  },
  time: { fontWeight: "bold", margin: "5px 0" },
  icon: { fontSize: "30px", margin: "5px 0" },
  temp: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "5px 0",
    color: "#333333ff",
  },
  description: { fontSize: "12px", color: "#666", margin: "5px 0" },
};

export default ForecastItem;
