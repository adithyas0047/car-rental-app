import React from "react";

const CarDetails = () => {
  return (
    <div className="car-details">
      <div className="car-photos">
        <img src="/tesla_model_y.jpeg" alt="Car 1" />
        <img src="/mercedes-benz-a-class.jpeg" alt="Car 2" />
        <img src="/mercedes-benz-g-wagon.jpeg" alt="Car 3" />
      </div>
      <div className="car-info">
        <h2>Car Model Name</h2>
        <p>Type: Sedan</p>
        <p>Mileage: 15 km/l</p>
        <p>Seater Capacity: 5</p>
      </div>
      <div className="reviews">
        <h3>Customer Reviews</h3>
        <p>⭐️⭐️⭐️⭐️⭐️ - Great car!</p>
        <p>⭐️⭐️⭐️⭐️ - Smooth drive.</p>
      </div>
    </div>
  );
};

export default CarDetails;
