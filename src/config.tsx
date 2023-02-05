import axios from "axios";
export const BASE_URL =
  "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1";
const axiosInstatnce = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstatnce;
