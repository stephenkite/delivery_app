import axios from "axios";

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.BASE_URL,
  },
  withCredentials: true,
});

export const getItems = async () => {
  return await api
    .get("/menuItems")
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};