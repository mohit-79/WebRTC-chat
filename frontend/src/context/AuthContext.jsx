// frontend/src/context/AuthContext.jsx
import { createContext, useContext, useEffect } from "react";
import { useAuth as useClerkAuth } from "@clerk/clerk-react";
import api from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const { isLoaded, isSignedIn, userId, getToken } = useClerkAuth();

  useEffect(() => {
    const id = api.interceptors.request.use(async (config) => {
      const token = await getToken();
      if (token) config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
    return () => api.interceptors.request.eject(id); // avoid stacking duplicate interceptors on re-render
  }, [getToken]);

  return (
    <AuthContext.Provider value={{ isLoaded, isSignedIn, userId }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);