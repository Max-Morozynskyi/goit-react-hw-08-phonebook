import { useAuth } from "hooks"
import { Navigate } from "react-router-dom";


export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const ShouldRedirect = !isLoggedIn & !isRefreshing;
  return ShouldRedirect ? <Navigate to={redirectTo} /> : Component;
} 