import { useContext, type JSX } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./authContext";

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  if (!auth?.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
