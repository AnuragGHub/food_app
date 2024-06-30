import { useNavigate } from "react-router-dom";
import "../Home/home.css";
import React from "react";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <button onClick={() => navigate("/menu")}>Menu</button>
      <button id="favorite-btn" onClick={() => navigate("/myfavorites")}>
        Favorites
      </button>
      <button id="randomMeal-btn" onClick={() => navigate("/random-meal")}>
        RandomMeal
      </button>
    </div>
  );
};

export default React.memo(Home);
