import { useNavigate } from "react-router-dom";
import { FOOD_API_BASE_URL } from "../Configurations/env";
import { ERROR } from "./route.constant";

export const fetchData = async (endPoint: string) => {
  try {
    let url = `${FOOD_API_BASE_URL}${endPoint}`;
    const response = await fetch(url, {
      method: "get",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
};
