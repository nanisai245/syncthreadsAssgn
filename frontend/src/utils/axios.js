import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://sync-threads.onrender.com/api",
  withCredentials: true,
});
