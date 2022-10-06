import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const isAuthenticated =
    localStorage.getItem("isAuthenticated") === "false" ? false : true;

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default Private;
