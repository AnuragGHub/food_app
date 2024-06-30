import { useCallback, useReducer } from "react";

type ActionType =
  | { type: "ADD"; item: Favourite }
  | { type: "REMOVE"; idMeal: string };

interface Favourite {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
}

type ITEMS = {
  [idMeal: string]: Favourite;
};

export function useFavourites(initialFavourites: Favourite): {
  favourites: Favourite;
  addFavourites: (item: Favourite) => void;
  removeFavourite: (idMeal: string) => void;
} {
  const [favourites, dispatch] = useReducer(
    (state: any, action: ActionType) => {
      switch (action.type) {
        case "ADD":
          let id = action.item.idMeal;
          return {
            ...state,
            id: {
              idMeal: action.item.idMeal,
              strMeal: action.item.strMeal,
              strMealThumb: action.item.strMealThumb,
            },
          };
        case "REMOVE":
          return Object.keys(state).filter(
            (idMeal) => state[idMeal].idMeal !== action.idMeal
          );
        default:
          throw new Error();
      }
    },
    initialFavourites
  );

  const addFavourites = useCallback((item: Favourite) => {
    dispatch({
      type: "ADD",
      item,
    });
  }, []);

  const removeFavourite = useCallback((idMeal: string) => {
    dispatch({
      type: "REMOVE",
      idMeal,
    });
  }, []);

  return { favourites, addFavourites, removeFavourite };
}
