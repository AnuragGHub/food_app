import "../RandomMeal/randomMeal.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../Utils/helper";
import React from "react";
import "../../global.css";
import { useNavigate } from "react-router-dom";
import { ERROR } from "../../Utils/route.constant";

type ITEMS = {
  [key: string]: string;
};

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState([]);
  const navigate = useNavigate();
  /**
   * Fetch data from api
   * @param {string} path
   * @returns data
   */
  const generateMeal = async () => {
    const data = await fetchData("/random.php");
    //error can be handled based on error code or status code
    if (!data) return navigate(ERROR);
    setRandomMeal(data?.meals);
  };

  useEffect(() => {
    generateMeal();
  }, []);
  return (
    <>
      <p className="title">Random Meal</p>
      <div className="menu-container">
        <div className="menu-wrapper">
          {randomMeal?.map((item: ITEMS, index: number) => {
            return (
              <div className="random-meal" key={crypto.randomUUID()}>
                <div className="random-menu">
                  <img src={item?.strMealThumb} alt={`${item?.idMeal}`} />
                  <p className="strCategory">{item?.strMeal}</p>
                  <p className="random-description">{item?.strInstructions}</p>
                </div>
                <button onClick={generateMeal}>Generate</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(RandomMeal);
