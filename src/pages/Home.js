// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import CoffeeItem from '../components/CoffeeItem';
import IngredientItem from '../components/IngredientItem';

const Home = () => {
  const [coffees, setCoffees] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    // Example data fetching
    setCoffees([{ name: 'Espresso', description: 'Strong coffee', price: 3.99 }]);
    setIngredients([{ name: 'Milk', description: 'Fresh cow milk' }]);
  }, []);

  return (
    <div>
      <h2>Coffees</h2>
      {coffees.map((coffee, index) => (
        <CoffeeItem key={index} coffee={coffee} />
      ))}
      <h2>Ingredients</h2>
      {ingredients.map((ingredient, index) => (
        <IngredientItem key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Home;