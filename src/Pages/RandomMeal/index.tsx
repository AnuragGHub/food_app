import "../RandomMeal/randomMeal.css";
import { useEffect, useState } from "react";
import { fetchData } from "../../Utils/helper";
import React from "react";

const RandomMeal = () => {
  const [randomMeal, setRandomMeal] = useState<any>([]);
  /**
   * Fetch data from api
   * @param {string} path
   * @returns data
   */
  const generateMeal = async () => {
    const data = await fetchData("/random.php");
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
          {randomMeal?.map((item: any, index: number) => {
            return (
              <div className="random-meal">
                <div className="random-menu" key={index}>
                  <img src={item?.strMealThumb} alt={`${item?.idMeal}`} />
                  <p style={{ fontSize: "14px", fontWeight: "700" }}>
                    {item?.strMeal}
                  </p>
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
