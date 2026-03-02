import axios from "axios";
import React from "react";

const UseAxiosSecure = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const instance = axios.create({
    baseURL: apiUrl,
  });
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("access-token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });
  return instance;
};

export default UseAxiosSecure;
