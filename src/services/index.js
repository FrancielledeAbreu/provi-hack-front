import axios from "axios";

const api = axios.create({
  baseURL: "https://provi-hack-api.herokuapp.com/",
});

export default api;
