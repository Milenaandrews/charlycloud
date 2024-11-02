import axios from "axios";

const axiosClient = axios.create({
  baseURL:
    "https://charly-backend-ndfc2n97a-milenas-projects-5e29101f.vercel.app",
});

export default axiosClient;
