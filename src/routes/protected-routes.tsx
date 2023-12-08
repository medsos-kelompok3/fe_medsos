import { Outlet, Navigate, useLocation } from "react-router-dom";

import { useToken } from "@/utils/context/token";

const ProtectedRoutes = () => {
  const { pathname } = useLocation();
  const { token } = useToken();

  const authProtected = ["/login", "/register"];
  const tokenProtected = [
    "/user/:user_id/profile",
    "/user/:user_id",
  ];

  if (authProtected.includes(pathname)) {
    if (token) return <Navigate to="/" />;
  }

  if (tokenProtected.includes(pathname)) {
    if (!token) return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoutes;