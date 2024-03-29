import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }) => {
  const { auth } = useAuth();

  return auth && allowedRoles.includes(auth) ? <Outlet /> : <Navigate to="/" />;
};

export default RequireAuth;
