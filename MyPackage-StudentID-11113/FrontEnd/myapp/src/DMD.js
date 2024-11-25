import React from 'react';

const DMD = () => {
  const styles = {
    container: {
      fontFamily: "'Arial', sans-serif",
      margin: '0 auto',
      padding: '20px',
      maxWidth: '1200px',
    },
    header: {
      backgroundColor: '#008080',
      color: '#fff',
      textAlign: 'center',
      padding: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
      borderRadius: '10px',
    },
    decisionGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '20px',
      marginTop: '20px',
    },
    card: {
      backgroundColor: '#f5f5f5',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      padding: '20px',
      textAlign: 'center',
      transition: 'transform 0.2s',
      cursor: 'pointer',
    },
    cardHover: {
      transform: 'scale(1.05)',
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: '#008080',
      marginBottom: '10px',
    },
    cardDescription: {
      fontSize: '14px',
      color: '#555',
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
        Tourism Management System - Decision Making Dashboard
      </header>
      <div style={styles.decisionGrid}>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Approve New Tours</div>
          <div style={styles.cardDescription}>
            Review and approve proposed tour packages.
          </div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Resolve Complaints</div>
          <div style={styles.cardDescription}>
            Address customer feedback and resolve issues.
          </div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Optimize Pricing</div>
          <div style={styles.cardDescription}>
            Analyze trends and set competitive pricing.
          </div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Allocate Resources</div>
          <div style={styles.cardDescription}>
            Assign guides and vehicles based on demand.
          </div>
        </div>
        <div
          style={styles.card}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          <div style={styles.cardTitle}>Evaluate Performance</div>
          <div style={styles.cardDescription}>
            Monitor KPIs and evaluate team efficiency.
          </div>
        </div>
      </div>
      <footer style={styles.footer}>
        © {new Date().getFullYear()} Tourism Management System
      </footer>
    </div>
  );
};

export default DMD;
