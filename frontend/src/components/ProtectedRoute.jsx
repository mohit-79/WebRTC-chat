// frontend/src/components/ProtectedRoute.jsx
import { useAuth } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isLoaded, isSignedIn } = useAuth();
  if (!isLoaded) return <p>Loading...</p>;
  if (!isSignedIn) return <Navigate to="/login" replace />;
  return children;
}