import { useState } from "react";
import burgerMenuIcon from "../../Assets/Images/burger-menu.svg";
import "../SidebarMenu/SidebarMenu.css";
import { useNavigate, useParams } from "react-router-dom";

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
          <li onClick={() => handleNavigate("/")}>Home</li>
          <li onClick={() => handleNavigate("/menu")}>Menu</li>
          <li onClick={() => handleNavigate("/myfavorites")}>My Favorites</li>
          <li onClick={() => handleNavigate("/random-meal")}>Meal Generator</li>
          <li onClick={() => handleNavigate("/about")}>About Me</li>
        </ul>
      )}
    </header>
  );
};

export default SidebarMenu;
