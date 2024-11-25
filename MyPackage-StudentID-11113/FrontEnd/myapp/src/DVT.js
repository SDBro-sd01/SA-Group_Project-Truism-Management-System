import React from "react";

const DataVisualizationTools = () => {
  const data = {
    visitors: 1200,
    bookings: 450,
    reviews: 320,
    popularDestinations: ["Beach Paradise", "Mountain Escape", "City Lights"],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tourism Management Dashboard</h1>
      <div style={styles.cardsContainer}>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Visitors</h2>
          <p style={styles.cardValue}>{data.visitors}</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Bookings</h2>
          <p style={styles.cardValue}>{data.bookings}</p>
        </div>
        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Total Reviews</h2>
          <p style={styles.cardValue}>{data.reviews}</p>
        </div>
      </div>
      <div style={styles.chartContainer}>
        <h2 style={styles.chartTitle}>Popular Destinations</h2>
        <ul style={styles.chartList}>
          {data.popularDestinations.map((destination, index) => (
            <li key={index} style={styles.chartItem}>
              {destination}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  title: {
    textAlign: "center",
    fontSize: "2em",
    marginBottom: "20px",
  },
  cardsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "20px",
    textAlign: "center",
    width: "200px",
    margin: "10px",
  },
  cardTitle: {
    fontSize: "1.2em",
    marginBottom: "10px",
  },
  cardValue: {
    fontSize: "1.8em",
    fontWeight: "bold",
    color: "#4CAF50",
  },
  chartContainer: {
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "20px",
  },
  chartTitle: {
    fontSize: "1.5em",
    marginBottom: "10px",
    textAlign: "center",
  },
  chartList: {
    listStyleType: "none",
    padding: "0",
  },
  chartItem: {
    fontSize: "1.2em",
    marginBottom: "8px",
    padding: "5px",
    backgroundColor: "#e8f5e9",
    borderRadius: "5px",
    textAlign: "center",
  },
};

export default DataVisualizationTools;
