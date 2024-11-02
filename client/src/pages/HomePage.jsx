// src/pages/HomePage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CocktailList from '../components/CocktailList';

function HomePage() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCocktails = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cocktails');
        setCocktails(response.data);
      } catch (error) {
        console.error('Error fetching cocktails:', error);
      }
      setLoading(false);
    };
    fetchCocktails();
  }, []);

  return (
    <div>
      <h1 className="text-center mb-4">Cocktail Explorer</h1>
      {loading ? <p>Loading...</p> : <CocktailList cocktails={cocktails} />}
    </div>
  );
}

export default HomePage;
