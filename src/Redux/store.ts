import { PayloadAction, configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface favorites {
  data: any;
}

const initialState: favorites = {
  data: {},
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      let id = action.payload.idMeal;
      let newData = {
        [id]: {
          idMeal: action.payload.idMeal,
          strMeal: action.payload.strMeal,
          strMealThumb: action.payload.strMealThumb,
        },
      };
      state.data = {
        ...state.data,
        ...newData,
      };
    },
    removeFavourite: (state, action: PayloadAction<number>) => {
      let favoritesFood: any = {};
      let filteredKeys = Object.keys(state.data).filter(
        (item: any) => state.data[item].idMeal !== action.payload
      );
      let data = filteredKeys.forEach(
        (key) => (favoritesFood[key] = state.data[key])
      );
      state.data = favoritesFood;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToFavorites, removeFavourite } = favoritesSlice.actions;

export const store = configureStore({
  reducer: {
    favourites: favoritesSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const favoritesCategories = (state: RootState) => state.favourites.data;

export default store;
