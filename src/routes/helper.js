import Home from "../pages/home";
import Login from "../pages/login";
import Desafios from "../pages/desafios";

export const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/login", name: "login", component: Login },
  { path: "/desafios", name: "desafios", component: Desafios },
];
