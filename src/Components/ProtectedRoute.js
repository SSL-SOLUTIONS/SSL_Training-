import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  // Check if user is authenticated, if not, redirect to login
  const isAuthenticated = !!localStorage.getItem("token");
    const { user } = useAuth();
     if (!user) {
       return <Navigate to="/login" replace />;
     }


  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default ProtectedRoute;
