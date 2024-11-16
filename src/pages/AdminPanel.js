// src/pages/AdminPanel.js
import React, { useState } from 'react';
import { addCoffee, addIngredient } from '../services/api';  // api.js

const AdminPanel = () => {
  const [coffeeName, setCoffeeName] = useState('');
  const [ingredientName, setIngredientName] = useState('');

  const handleAddCoffee = () => {
    addCoffee({ name: coffeeName, description: 'New coffee', price: 5.99 });
    setCoffeeName('');
  };

  const handleAddIngredient = () => {
    addIngredient({ name: ingredientName, description: 'New ingredient' });
    setIngredientName('');
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <input 
        type="text" 
        value={coffeeName} 
        onChange={(e) => setCoffeeName(e.target.value)} 
        placeholder="Coffee Name"
      />
      <button onClick={handleAddCoffee}>Add Coffee</button>
      <input 
        type="text" 
        value={ingredientName} 
        onChange={(e) => setIngredientName(e.target.value)} 
        placeholder="Ingredient Name"
      />
      <button onClick={handleAddIngredient}>Add Ingredient</button>
    </div>
  );
};

export default AdminPanel;