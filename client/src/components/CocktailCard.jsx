import React from 'react';
import { Link } from 'react-router-dom';

function CocktailCard({ cocktail }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <img src={cocktail.strDrinkThumb} className="card-img-top" alt={cocktail.strDrink} />
        <div className="card-body">
          <h5 className="card-title">{cocktail.strDrink}</h5>
          <Link to={`/cocktail/${cocktail.idDrink}`} className="btn btn-primary">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
