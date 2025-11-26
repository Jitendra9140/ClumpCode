import React from "react";
import { Navigate } from "react-router-dom";

// Checks for a token in localStorage (customize as needed)
const isAuthenticated = () => {
  return Boolean(localStorage.getItem("token"));
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
