import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SidebarMenu from "./Components/SidebarMenu";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import RandomMeal from "./Pages/RandomMeal";
import MyFavorites from "./Pages/MyFavorites";
import Categories from "./Pages/Categories";
import {
  ABOUT,
  CATEGORY,
  HOME,
  MENU,
  MY_FAVOURITES,
  RANDOM_MEAL,
} from "./Utils/route.constant";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarMenu />
        <Routes>
          <Route path={HOME} element={<Home />} />
          <Route path={MENU} element={<Menu />} />
          <Route path={MY_FAVOURITES} element={<MyFavorites />} />
          <Route path={RANDOM_MEAL} element={<RandomMeal />} />
          <Route path={ABOUT} element={<About />} />
          <Route path={CATEGORY} element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
