import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_NEST_API_URL,
  withCredentials: true, // sends cookies automatically
});

export default api;
