import { useState } from "react";
import burgerMenuIcon from "../../Assets/Images/burger-menu.svg";
import "../SidebarMenu/SidebarMenu.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  ABOUT,
  HOME,
  MENU,
  MY_FAVOURITES,
  RANDOM_MEAL,
} from "../../Utils/route.constant";

const SidebarMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();

  /**
   * Redirect to selected page
   * @param {string} path
   * Navigate to Page
   * @returns void
   */
  const handleNavigate = (path: string) => {
    setOpenMenu(false);
    navigate(path);
  };
  return (
    <header className={openMenu ? "sidebar-container" : "menubar"}>
      <div className="sidebar-wrapper">
        <img
          style={{ width: "2rem", cursor: "pointer" }}
          src={burgerMenuIcon}
          alt="burgerMenuIcon"
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>
      {openMenu && (
        <ul>
          <li onClick={() => handleNavigate(HOME)}>Home</li>
          <li onClick={() => handleNavigate(MENU)}>Menu</li>
          <li onClick={() => handleNavigate(MY_FAVOURITES)}>My Favorites</li>
          <li onClick={() => handleNavigate(RANDOM_MEAL)}>Meal Generator</li>
          <li onClick={() => handleNavigate(ABOUT)}>About Me</li>
        </ul>
      )}
    </header>
  );
};

export default SidebarMenu;
