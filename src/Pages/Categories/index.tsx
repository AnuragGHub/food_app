import { useParams } from "react-router-dom";
import "../../global.css";
import "../Categories/categories.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  favoritesCategories,
  addToFavorites,
  removeFavourite,
} from "../../Redux/store";
import { fetchData } from "../../Utils/helper";
import React from "react";

const Categories = () => {
  const [data, setData] = useState<any>();
  const favoriteItems = useSelector(favoritesCategories);
  const dispatch = useDispatch();
  const { category } = useParams();

  const getbyCategory = async () => {
    /**
     * Fetch data from api
     * @param {string} path
     * @returns data
     */
    const data = await fetchData(`/filter.php?c=${category}`);
    setData(data?.meals);
  };

  useEffect(() => {
    getbyCategory();
  }, []);

  /**
   * add favourite item to store
   * @param {object} item
   * @returns void
   */
  const handleCategory = (item: any) => {
    dispatch(addToFavorites(item));
  };

  return (
    <>
      <p className="title">{category}</p>
      <div className="menu-container">
        <div className="menu-wrapper">
          {data?.map((item: any, index: number) => {
            return (
              <div className="menu-categories" key={index}>
                <img
                  style={{ width: "200px", borderRadius: "10px" }}
                  src={item?.strMealThumb}
                  alt={`${item?.idMeal}`}
                />
                <p style={{ fontSize: "14px", fontWeight: "700" }}>
                  {item?.strMeal}
                </p>

                {!favoriteItems[item?.idMeal] ? (
                  <button
                    className="addToFavourite"
                    onClick={() => handleCategory(item)}
                  >
                    Add to favorite
                  </button>
                ) : (
                  <button
                    className="addToFavourite"
                    onClick={() => dispatch(removeFavourite(item.idMeal))}
                  >
                    Remove
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Categories);
