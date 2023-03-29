import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  let userLocal = localStorage.getItem("user");
  if (!userLocal) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
