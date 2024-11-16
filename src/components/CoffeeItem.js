// src/components/CoffeeItem.js
import React from 'react';

const CoffeeItem = ({ coffee }) => {
  return (
    <div className="coffee-item">
      <h3>{coffee.name}</h3>
      <p>{coffee.description}</p>
      <p>Price: ${coffee.price}</p>
    </div>
  );
};

export default CoffeeItem;