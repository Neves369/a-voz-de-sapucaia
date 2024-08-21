import axios from "axios";
import config from "./config";

const apiURL = `http://${config.IP_DEV}/api-clube-esperancinha/v1`;

const api = axios.create({
  baseURL: `${apiURL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json;charset=UTF-8",
    Authorization: config.AUTH     
  },
});

export default api;
