// file: src/middleware/RequireAuth.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const RequireAuth: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default RequireAuth;
