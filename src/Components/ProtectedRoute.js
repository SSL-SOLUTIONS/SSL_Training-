// components/ProtectedRoute.js

import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  // Check if user is authenticated, if not, redirect to login
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
