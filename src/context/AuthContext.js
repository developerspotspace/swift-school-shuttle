import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null); // Initialize with null to avoid destructuring errors

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (role) => setUser({ role });  // Function to log in a user with a role
  const logout = () => setUser(null); // Logout function

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
