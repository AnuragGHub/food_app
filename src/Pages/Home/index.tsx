import { useNavigate } from "react-router-dom";
import "../Home/home.css";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <button onClick={() => navigate("/menu")}>Menu</button>
      <button
        onClick={() => navigate("/myfavorites")}
        style={{ marginLeft: "10px" }}
      >
        Favorites
      </button>
      <button
        onClick={() => navigate("/random-meal")}
        style={{ marginLeft: "10px" }}
      >
        RandomMeal
      </button>
    </div>
  );
};

export default React.memo(Home);
