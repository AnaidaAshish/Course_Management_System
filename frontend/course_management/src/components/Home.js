import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Home.css";
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Course Management App</h1>
      <p>Please log in or register to get started.</p>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
