// src/components/FiltersSidebar.js
import React from 'react';

const FiltersSidebar = ({ filters, onFilterChange }) => {
  return (
    <aside className="filters-sidebar">
      <h3>Filters</h3>
      <label>
        Type:
        <select onChange={(e) => onFilterChange('type', e.target.value)}>
          <option value="">All</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
        </select>
      </label>
      <label>
        Cost per Day:
        <input
          type="number"
          placeholder="Max Cost"
          onChange={(e) => onFilterChange('cost', e.target.value)}
        />
      </label>
      {/* Add more filters as needed */}
    </aside>
  );
};

export default FiltersSidebar;
