import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
  },
  withCredentials: true,
});

export const register = async (data) => {
  return await api
    .post("/auth/register",data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    });
};