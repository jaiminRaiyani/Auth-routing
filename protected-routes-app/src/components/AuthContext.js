// AuthContext.js
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // A mock function to validate user credentials
  const login = (email, password) => {
    const correctEmail = "test@example.com"; // Replace with actual validation logic
    const correctPassword = "password123"; // Replace with actual validation logic

    if (email === correctEmail && password === correctPassword) {
      const userData = { email }; // Store user data
      setUser(userData); // Set user state
      localStorage.setItem("user", JSON.stringify(userData)); // Optional: Store user in local storage
    } else {
      throw new Error("Invalid credentials"); // Throw error for invalid login
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isAuthenticated = () => {
    return !!user; // Returns true if user is authenticated
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
