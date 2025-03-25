import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://syncthreads.onrender.com/api",
  withCredentials: true,
});
