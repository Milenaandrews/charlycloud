import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://charly-backend.onrender.com",
});

export default axiosClient;
