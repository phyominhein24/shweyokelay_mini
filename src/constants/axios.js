import axios from "axios";
import { baseURL } from "./endpoints";
import { getData } from "../helpers/localstorage";
import { keys } from "./config";

const http = axios.create({
  baseURL: baseURL,
});

http.interceptors.request.use(
  (config) => {
    const token = getData(keys.API_TOKEN) ? getData(keys.API_TOKEN) : null;

    if (token) {
      config.headers = {
        ...config.headers,
        authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default http;
