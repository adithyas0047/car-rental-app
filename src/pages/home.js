// src/pages/home.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const cars = [
    { id: 1, name: "Tesla Model Y", type: "SUV", cost: "₹50000 / day" },
    { id: 2, name: "Mercedes-Benz A Class", type: "Sedan", cost: "₹700000 / day" },
    { id: 3, name: "Mercedes-Benz G Wagon", type: "SUV", cost: "₹900000 / day" },
  ];

  const handleRentNow = (id) => {
    // Navigate to Car Details page with car ID
    navigate(`/car-details/${id}`);
  };

  return (
    <div className="container">
      {cars.map((car) => (
        <div key={car.id} className="card">
          <h2>{car.name}</h2>
          <p>Type: {car.type}</p>
          <p>Cost: {car.cost}</p>
          <button onClick={() => handleRentNow(car.id)}>Rent Now</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
