// Create a file for Axios configuration, e.g., axiosConfig.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
  // Set common headers
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
