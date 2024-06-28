import { useEffect, useState } from "react";
import "../../global.css";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../../Utils/helper";
import React from "react";

interface ICategories {
  categories: [];
}

const Menu = () => {
  const [categories, setCategories] = useState<any>([]);
  const navigate = useNavigate();

  const getFoodCategories = async () => {
    /**
     * Fetch data from api
     * @param {string} path
     * @returns data
     */
    const response = await fetchData("/categories.php");
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
          {categories?.map((item: any, index: number) => {
            return (
              <div
                className="menu-categories"
                key={index}
                onClick={() => handleCategory(item?.strCategory)}
              >
                <img
                  style={{ width: "200px", borderRadius: "10px" }}
                  src={item?.strCategoryThumb}
                  alt={`${item?.strCategory}+${item?.idCategory}`}
                />
                <p style={{ fontSize: "14px", fontWeight: "700" }}>
                  {item?.strCategory}
                </p>
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
