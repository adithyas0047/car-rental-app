// src/pages/Search.js
import React, { useState } from 'react';
import CarCard from '../components/CarCard';
import FiltersSidebar from '../components/FiltersSidebar';

const cars = [
  { id: 1, name: 'Tesla Model Y', type: 'SUV', cost: 50000, image: '/tesla_model_y.jpeg' },
  { id: 2, name: 'Mercedes-Benz A Class', type: 'Sedan', cost: 700000, image: '/mercedes-benz-a-class.jpeg' },
  { id: 3, name: 'Mercedes G Wagon', type: 'SUV', cost: 900000, image: '/mercedes-benz-g-wagon.jpeg' },
];

const Search = () => {
  const [filteredCars, setFilteredCars] = useState(cars);

  const handleFilterChange = (filter, value) => {
    const filtered = cars.filter((car) =>
      filter === 'type'
        ? car.type === value || value === ''
        : car.cost <= value || value === ''
    );
    setFilteredCars(filtered);
  };

  return (
    <div className="search-page">
      <FiltersSidebar onFilterChange={handleFilterChange} />
      <div className="car-list">
        {filteredCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Search;
