import axios from "axios";

export const AxiosNode = axios.create();
AxiosNode.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    console.log(token)
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);