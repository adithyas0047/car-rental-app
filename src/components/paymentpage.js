// src/components/PaymentPage.js
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsProcessing(true); // Set processing state to true

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      navigate('/payment-success'); // Navigate to success page
    }, 2000); // Simulated delay of 2 seconds
  };

  return (
    <div className="container" style={styles.container}>
      <h1 style={styles.heading}>Payment Page</h1>
      <p style={styles.text}>Please enter your payment details below to confirm the booking:</p>
      <form style={styles.form} onSubmit={handlePayment}>
        <div style={styles.formGroup}>
          <label htmlFor="cardNumber">Card Number:</label>
          <input type="text" id="cardNumber" placeholder="Enter card number" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="expiryDate">Expiry Date:</label>
          <input type="text" id="expiryDate" placeholder="MM/YY" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="cvv">CVV:</label>
          <input type="text" id="cvv" placeholder="Enter CVV" required style={styles.input} />
        </div>
        <button
          type="submit"
          style={isProcessing ? styles.disabledButton : styles.button}
          disabled={isProcessing}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  text: {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4caf50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  disabledButton: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#9e9e9e',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
};

export default PaymentPage;
