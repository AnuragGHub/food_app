import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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
import getAppRouter from "./Configurations/getAppRouter";
import Loader from "./Components/Loader";

function App() {
  const router = getAppRouter();
  const children = <RouterProvider router={router} />;
  return (
    <div className="App">
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
}

export default App;
