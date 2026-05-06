import axios from "axios";

const API = axios.create({
  baseURL: "https://YOUR_API_GATEWAY_URL", // replace later
  timeout: 5000
});

// TEMP: disable auth to avoid crashes
// API.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) config.headers.Authorization = token;
//   return config;
// });

export default API;
