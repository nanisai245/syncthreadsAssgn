import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://syncthreads-backend-0myw.onrender.com/api",
  withCredentials: true,
});
