import { useEffect, useState } from "react";
import "../../global.css";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../Utils/helper";
import React from "react";
import { ERROR } from "../../Utils/route.constant";

interface ICATEGORY {
  idCategory: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}

const Menu = () => {
  const [categories, setCategories] = useState<ICATEGORY[]>([]);
  const navigate = useNavigate();

  const getFoodCategories = async () => {
    /**
     * Fetch data from api
     * @param {string} path
     * @returns data
     */
    const response = await fetchData("/categories.php");
    //error can be handled based on error code or status code
    if (!response) return navigate(ERROR);
    setCategories(response?.categories);
  };

  useEffect(() => {
    getFoodCategories();
  }, []);

  /**
   * Redirect to selected menu category
   * @param {string} category
   * Navigate to Category
   * @returns void
   */
  const handleCategory = (category: string) => {
    navigate(`/menu/category/${category}`);
  };

  return (
    <>
      <p className="title">Menu</p>
      <div className="menu-container">
        <div className="menu-wrapper">
          {categories?.map((item: ICATEGORY, index: number) => {
            return (
              <div
                className="menu-categories"
                key={crypto.randomUUID()}
                onClick={() => handleCategory(item?.strCategory)}
              >
                <img
                  src={item?.strCategoryThumb}
                  alt={`${item?.strCategory}+${item?.idCategory}`}
                />
                <p className="strCategory">{item?.strCategory}</p>
                <p className="description">{item?.strCategoryDescription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default React.memo(Menu);
