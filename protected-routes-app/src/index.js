// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthProvider } from "./components/AuthContext"; // Adjust the import path as necessary

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
