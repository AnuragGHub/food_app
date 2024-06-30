import { NavigateOptions, To } from "react-router-dom";
import {
  ABOUT,
  CATEGORY,
  ERROR,
  HOME,
  MENU,
  MY_FAVOURITES,
  RANDOM_MEAL,
} from "../Utils/route.constant";

type AppRouteItem = {
  pathname: To;
  options?: NavigateOptions;
};

type AppRoute = {
  [key: string]: AppRouteItem;
};

const APP_ROUTES: AppRoute = {
  HOME: {
    pathname: HOME,
  },
  MENU: {
    pathname: MENU,
  },
  MY_FAVOURITES: {
    pathname: MY_FAVOURITES,
  },
  RANDOM_MEAL: {
    pathname: RANDOM_MEAL,
  },
  ABOUT: {
    pathname: ABOUT,
  },
  CATEGORY: {
    pathname: CATEGORY,
  },
  ERROR: {
    pathname: ERROR,
  },
  ANY: {
    pathname: "*",
  },
};

export default APP_ROUTES;
