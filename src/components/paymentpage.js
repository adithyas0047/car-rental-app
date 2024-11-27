// src/components/PaymentPage.js
import React from "react";

const PaymentPage = () => {
  return (
    <div className="container">
      <h1>Payment Page</h1>
      <p>Please enter your payment details below to confirm the booking:</p>
      <form>
        <label htmlFor="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" placeholder="Enter card number" />
        <br />
        <label htmlFor="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" placeholder="MM/YY" />
        <br />
        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" placeholder="Enter CVV" />
        <br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
};

export default PaymentPage;
