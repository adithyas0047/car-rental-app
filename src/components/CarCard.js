// src/components/CarCard.js
import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h3>{car.name}</h3>
      <p>Type: {car.type}</p>
      <p>Cost: ₹{car.cost} / day</p>
      <button>Rent Now</button>
    </div>
  );
};

export default CarCard;
