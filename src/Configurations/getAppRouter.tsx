import React from "react";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import APP_ROUTES from "../Constants/APP_ROUTES";

const MainLayout = React.lazy(() => import("../../src/Layouts/Main.Layout"));
const Home = React.lazy(() => import("../Pages/Home"));
const Menu = React.lazy(() => import("../Pages/Menu"));
const MyFavorites = React.lazy(() => import("../Pages/MyFavorites"));
const RandomMeal = React.lazy(() => import("../Pages/RandomMeal"));
const About = React.lazy(() => import("../Pages/About"));
const Categories = React.lazy(() => import("../Pages/Categories"));
const Page404 = React.lazy(() => import("../Pages/Page404"));
const ErrorPage = React.lazy(() => import("../Components/ErrorPage"));

const routeObj: RouteObject[] = [
  {
    element: <MainLayout />,
    children: [
      {
        path: APP_ROUTES.HOME.pathname,
        element: <Home />,
      },
      {
        path: APP_ROUTES.MENU.pathname,
        element: <Menu />,
      },
      {
        path: APP_ROUTES.MY_FAVOURITES.pathname,
        element: <MyFavorites />,
      },
      {
        path: APP_ROUTES.RANDOM_MEAL.pathname,
        element: <RandomMeal />,
      },
      {
        path: APP_ROUTES.ABOUT.pathname,
        element: <About />,
      },
      {
        path: APP_ROUTES.CATEGORY.pathname,
        element: <Categories />,
      },
      {
        path: APP_ROUTES.ERROR.pathname,
        element: <ErrorPage />,
      },
    ],
  } as RouteObject,
  {
    path: APP_ROUTES.ANY.pathname,
    element: <Page404 />,
  } as RouteObject,
];

const getAppRouter = () => createBrowserRouter(routeObj);

export default getAppRouter;
