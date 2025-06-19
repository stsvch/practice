// src/pages/Forbidden.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Forbidden = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-6xl font-bold mb-4">403</h1>
    <p className="text-xl mb-6">У вас нет доступа к этой странице.</p>
    <Link to="/" className="text-blue-600 hover:underline">
      Вернуться на главную
    </Link>
  </div>
);

export default Forbidden;
