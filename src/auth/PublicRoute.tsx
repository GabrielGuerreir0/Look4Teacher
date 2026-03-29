// auth/PublicRoute.tsx
import { Navigate } from "react-router-dom";
import { useContext, type JSX } from "react";
import { AuthContext } from "./authContext";

export function PublicRoute({ children }: { children: JSX.Element }) {
  const auth = useContext(AuthContext);

  if (auth?.isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}
