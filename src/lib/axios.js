import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:3000/api"
      : `${import.meta.env.SERVER_URL}/api`,
  withCredentials: true,
});
