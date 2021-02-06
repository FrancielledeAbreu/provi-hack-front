import axios from "axios";

const api = axios.create({
  baseURL:
    "http://cors-anywhere.herokuapp.com/https://provi-hack-api.herokuapp.com/",
});

export default api;
