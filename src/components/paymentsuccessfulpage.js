// src/components/PaymentSuccessPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentSuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Payment Successful! 🎉</h1>
        <p style={styles.message}>Thank you for renting with us. We hope you enjoy your ride!</p>
        <button
          style={styles.button}
          onClick={() => navigate('/')}
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f9',
  },
  card: {
    textAlign: 'center',
    background: '#fff',
    padding: '20px 40px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '24px',
    marginBottom: '10px',
    color: '#4caf50',
  },
  message: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PaymentSuccessPage;
