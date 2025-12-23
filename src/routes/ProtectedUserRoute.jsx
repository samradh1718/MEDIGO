import { Navigate } from "react-router-dom";

const ProtectedUserRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  if (!isLoggedIn || role !== "user") {
    return <Navigate to="/auth" replace />;
  }

  return children;
};

export default ProtectedUserRoute;
