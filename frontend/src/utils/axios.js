import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "https://syncthreads-backend-0myw.onrender.com/api",
  baseURL: import.meta.env.VITE_RENDER_API || "http://localhost:5001/api",
  withCredentials: true,
});
