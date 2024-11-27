// src/components/CarDetailsPage.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const CarDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mocked data for demo
  const carDetails = {
    1: { name: "Tesla Model Y", type: "SUV", cost: "₹50000 / day" },
    2: { name: "Mercedes-Benz A Class", type: "Sedan", cost: "₹700000 / day" },
    3: { name: "Mercedes-Benz G Wagon", type: "SUV", cost: "₹900000 / day" },
  };

  const car = carDetails[id];

  const handleProceedToPayment = () => {
    navigate("/payment");
  };

  return (
    <div className="container">
      <h1>{car.name}</h1>
      <p>Type: {car.type}</p>
      <p>Cost: {car.cost}</p>
      <button onClick={handleProceedToPayment}>Proceed to Payment</button>
    </div>
  );
};

export default CarDetailsPage;
