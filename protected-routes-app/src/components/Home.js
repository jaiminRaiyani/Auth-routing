import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleDashboardClick = () => {
    navigate("/dashboard");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to the Application</h1>
        <p className="home-description">
          Experience seamless navigation through protected routes and secure
          authentication. Please log in to access your personalized dashboard.
        </p>
        <div className="home-buttons">
          <button
            onClick={handleLoginClick}
            className="home-button login-button"
          >
            Login
          </button>
          <button
            onClick={handleDashboardClick}
            className="home-button dashboard-button large-button"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
