import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "./auth/authContext";
import { ProtectedRoute } from "./auth/ProtectedRoute";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { Register } from "./pages/Register";

function App() {
  const auth = useContext(AuthContext);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          auth?.isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Login />
          )
        }
      />
      <Route
        path="/register"
        element={
          auth?.isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Register />
          )
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
