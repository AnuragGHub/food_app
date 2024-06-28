import { FOOD_API_BASE_URL } from "../Configurations/env";

export const fetchData = async (endPoint: string) => {
  let url = `${FOOD_API_BASE_URL}${endPoint}`;
  const response = await fetch(url, {
    method: "get",
  });
  const data = await response.json();
  return data;
};
