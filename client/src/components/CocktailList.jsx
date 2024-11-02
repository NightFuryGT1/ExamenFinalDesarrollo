// src/components/CocktailList.jsx
import React from 'react';
import CocktailCard from './CocktailCard';

function CocktailList({ cocktails }) {
  return (
    <div className="row">
      {cocktails.map(cocktail => (
        <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
      ))}
    </div>
  );
}

export default CocktailList;
