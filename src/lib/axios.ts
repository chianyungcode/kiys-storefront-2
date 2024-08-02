import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api"
      : "https://kiys-api.chianyung.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const axiosAuth = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/api"
      : "https://kiys-api.chianyung.dev/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
