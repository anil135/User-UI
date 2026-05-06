import axios from "axios";

const API = axios.create({
  baseURL: "https://YOUR_API_GATEWAY_URL",
});

// Attach token (Cognito JWT)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

export default API;
