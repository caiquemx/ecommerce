import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import CartPage from './components/pages/CartPage';
import HomePage from './components/pages/HomePage';
import ProductDetails from './components/pages/ProductDetails';

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
        <Route
          path="/cart"
          element={<CartPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
