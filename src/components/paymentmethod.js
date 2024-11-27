import React from "react";

const PaymentMethods = () => {
  return (
    <div className="payment-methods">
      <h3>Payment Methods</h3>
      <label>
        <input type="radio" name="payment" value="credit-card" />
        Credit Card
      </label>
      <label>
        <input type="radio" name="payment" value="debit-card" />
        Debit Card
      </label>
      <label>
        <input type="radio" name="payment" value="paypal" />
        PayPal
      </label>
    </div>
  );
};

export default PaymentMethods;
