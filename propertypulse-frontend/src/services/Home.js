import React from "react";
import { useLocation } from "react-router-dom";
import './Home.css';

function Home() {
  const location = useLocation();
  const { id } = location.state || { id: "Guest" };

  return (
    <div className="bg-container">
      <h1 className="heading">Welcome, {id}!</h1>
    </div>
  );
}

export default Home;
