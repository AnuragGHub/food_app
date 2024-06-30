import { useNavigate, useParams } from "react-router-dom";
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
import { ERROR } from "../../Utils/route.constant";
interface ITEMS {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const Categories = () => {
  const [data, setData] = useState<ITEMS[]>([]);
  const favoriteItems = useSelector(favoritesCategories);
  const dispatch = useDispatch();
  const { category } = useParams();
  const navigate = useNavigate();

  const getbyCategory = async () => {
    /**
     * Fetch data from api
     * @param {string} path
     * @returns data
     */
    const data = await fetchData(`/filter.php?c=${category}`);
    //error can be handled based on error code or status code
    if (!data) return navigate(ERROR);
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
  const handleCategory = (item: ITEMS) => {
    dispatch(addToFavorites(item));
  };

  return (
    <>
      <p className="title">{category}</p>
      <div className="menu-container">
        <div className="menu-wrapper">
          {data?.map((item: ITEMS, index: number) => {
            return (
              <div className="menu-categories" key={crypto.randomUUID()}>
                <img src={item?.strMealThumb} alt={`${item?.idMeal}`} />
                <p className="strCategory">{item?.strMeal}</p>

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
