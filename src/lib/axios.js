import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_MODE === "development"
      ? "http://localhost:3000/api"
      : `${import.meta.env.VITE_SERVER_URL}/api`,
  withCredentials: true,
});
