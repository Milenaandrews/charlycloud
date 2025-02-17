import axios from "axios";
//TODO cambiar la url por la de producción
const axiosClient = axios.create({
  baseURL: "https://charly-backend.onrender.com",
});

export default axiosClient;
