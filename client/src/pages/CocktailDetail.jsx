// src/pages/CocktailDetail.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function CocktailDetail() {
  const { id } = useParams();
  const [cocktail, setCocktail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/cocktail/${id}`);
        setCocktail(response.data);
      } catch (error) {
        console.error('Error fetching cocktail details:', error);
      }
      setLoading(false);
    };
    fetchCocktail();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {cocktail ? (
        <>
          <h2>{cocktail.strDrink}</h2>
          <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
          <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
          {/* Lista de ingredientes */}
          <ul>
            {Object.keys(cocktail)
              .filter(key => key.startsWith('strIngredient') && cocktail[key])
              .map(key => (
                <li key={key}>{cocktail[key]}</li>
              ))}
          </ul>
          {/* Botón para regresar a la página principal */}
          <Link to="/" className="btn btn-secondary mt-4">
            Back to Home
          </Link>
        </>
      ) : (
        <p>No cocktail found.</p>
      )}
    </div>
  );
}

export default CocktailDetail;
