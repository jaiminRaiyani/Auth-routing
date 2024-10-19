import React from "react";
import { useAuth } from "./AuthContext";
import "../styles/Dashboard.css"; // Update this line

const Dashboard = () => {
  const { logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
      <button onClick={logout} className="btn">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
