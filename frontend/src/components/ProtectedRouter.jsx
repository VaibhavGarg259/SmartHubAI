import React from "react";
import { Navigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRouter;
