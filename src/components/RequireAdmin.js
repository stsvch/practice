// src/components/RequireAdmin.jsx
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const RequireAdmin = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    // не авторизован → кидаем на логин
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.roles.includes('Admin')) {
    // нет права → 403
    return <Navigate to="/403" replace />;
  }

  return children;
};

export default RequireAdmin;
