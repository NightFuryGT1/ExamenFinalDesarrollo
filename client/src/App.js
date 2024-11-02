// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CocktailDetail from './pages/CocktailDetail';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cocktail/:id" element={<CocktailDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
