import React from 'react';
import { Link } from 'react-router-dom';

const AdminDash = () => {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: '0 auto',
      padding: '20px',
      maxWidth: '1200px',
    },
    header: {
      backgroundColor: '#004d99',
      color: '#fff',
      textAlign: 'center',
      padding: '36px 0',
      fontSize: '22px',
      fontWeight: 'bold',
      borderRadius: '10px',
    },
    cardGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      marginTop: '20px',
    },
    card: {
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#004d99',
      textDecoration: 'none',
    },
    footer: {
      marginTop: '40px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#888',
    },
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        Tourism Management System - Admin Dashboard
      </header>
      <div style={styles.cardGrid}>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <Link to="/UserEdit" style={styles.cardTitle}>
            Manage Users
          </Link>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Bookings Overview</div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Tour Packages</div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Revenue Analysis</div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Feedback & Reviews</div>
        </div>
      </div>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Tourism Management System
      </footer>
    </div>
  );
};

export default AdminDash;
