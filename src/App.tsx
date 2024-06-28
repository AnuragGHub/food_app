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

function App() {
  return (
    <div className="App">
      {/* <header>Header</header> */}
      {/* <SidebarMenu /> */}

      <BrowserRouter>
        <SidebarMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/myfavorites" element={<MyFavorites />} />
          <Route path="/random-meal" element={<RandomMeal />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu/category/:category" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
