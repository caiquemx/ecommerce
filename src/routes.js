import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import HomePage from './components/pages/HomePage';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
