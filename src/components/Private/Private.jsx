import { useProvider } from "../../utils/FirebaseProvider";
import { Navigate, Outlet } from "react-router-dom";

function Private() {
  const { isAuthenticated } = useProvider();

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default Private;
