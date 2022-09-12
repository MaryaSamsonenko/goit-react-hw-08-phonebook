import axios from "axios";
import { BASE_URL } from "../constants/baseURL";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const token = {
  set(token) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosInstance.defaults.headers.common.Authorization = "";
  },
};
