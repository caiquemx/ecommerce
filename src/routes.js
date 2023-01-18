import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ProductDetails from './components/products/ProductDetails';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="/:id"
          element={<ProductDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
}
