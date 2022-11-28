import axios from "axios";

export const apiRequest = async (url: string, method = "GET", body: object) => {
  const { data } = await axios({ method: method, url:process.env.REACT_APP_BASE_URL + url, data: body });

  return data;
};
