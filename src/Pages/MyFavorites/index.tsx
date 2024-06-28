import { useDispatch, useSelector } from "react-redux";
import "../../global.css";
import "../MyFavorites/myFavorites.css";
import { favoritesCategories, removeFavourite } from "../../Redux/store";
import React from "react";

const MyFavorites = () => {
  const favoriteItems = useSelector(favoritesCategories);
  const dispatch = useDispatch();
  return (
    <>
      {Object.keys(favoriteItems).length > 0 ? (
        <p className="title">Favourite Meal</p>
      ) : (
        <></>
      )}
      {Object.keys(favoriteItems).length > 0 ? (
        <div className="menu-container">
          <div className="menu-wrapper">
            {Object.keys(favoriteItems)?.map((id) => {
              return (
                <div className="menu-categories" key={id}>
                  <img
                    style={{ width: "200px", borderRadius: "10px" }}
                    src={favoriteItems[id]?.strMealThumb}
                    alt={`${favoriteItems[id]?.idMeal}`}
                  />
                  <p style={{ fontSize: "14px", fontWeight: "700" }}>
                    {favoriteItems[id]?.strMeal}
                  </p>
                  <button
                    className="removeFavourite"
                    onClick={() =>
                      dispatch(removeFavourite(favoriteItems[id].idMeal))
                    }
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="no-data">Please add your favorite food!</div>
      )}
    </>
  );
};

export default React.memo(MyFavorites);
