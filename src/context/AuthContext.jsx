import { createContext, useState, useContext } from "react";

// Create Auth Context
const AuthContext = createContext();

// Auth Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Login function
  const login = (email) => {
    setUser({ email });
  };

  // Logout function
  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// ✅ Ensure this function is correctly written
export function useAuth() {
  return useContext(AuthContext);
}
