// src/components/IngredientItem.js
import React from 'react';

const IngredientItem = ({ ingredient }) => {
  return (
    <div className="ingredient-item">
      <h4>{ingredient.name}</h4>
      <p>{ingredient.description}</p>
    </div>
  );
};

export default IngredientItem;