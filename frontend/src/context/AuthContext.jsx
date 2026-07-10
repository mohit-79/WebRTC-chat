import { createContext, useContext, useEffect } from "react";
import { useAuth } from "@clerk/clerk-react";
import api from "../services/api";

const AuthContext = createContext();


export function AuthProvider({ children }) {
    const { isSignedIn } = useAuth();

    useEffect(() => {
        if (!isSignedIn) return;

        api.post("/auth/sync").catch(console.error);

    }, [isSignedIn]);

    return (
        <AuthContext.Provider value={{}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAppAuth() {
    return useContext(AuthContext);
}