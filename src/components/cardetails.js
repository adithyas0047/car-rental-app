// src/components/CarDetailsPage.js
import React from "react";
import { useLocation } from "react-router-dom";

const CarDetails = () => {
  const location = useLocation();
  const car = location.state;

  if (!car) {
    return <p>Car details not available. Please navigate from the Search Page.</p>;
  }

  return (
    <div className="car-details">
      <div className="car-photos">
        <img src={car.image} alt={car.name} style={{ width: "300px", height: "200px" }} />
      </div>
      <div className="car-info">
        <h2>{car.name}</h2>
        <p>Type: {car.type}</p>
        <p>Mileage: {car.mileage}</p>
        <p>Seater Capacity: {car.seater}</p>
        <p>Cost: {car.cost}</p>
      </div>
      <div className="reviews">
        <h3>Customer Reviews</h3>
        {car.reviews.map((review, index) => (
          <p key={index}>{review}</p>
        ))}
      </div>
    </div>
  );
};

export default CarDetails;
