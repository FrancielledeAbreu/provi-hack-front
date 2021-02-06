import React from "react";
import { Link } from "react-router-dom";
import { routes } from "../helper";

const RestrictedLinks = () => {
  return (
    <>
      {routes.map((route, key) => (
        <Link key={key} to={route.path}>
          {route.name}
        </Link>
      ))}
    </>
  );
};

export default RestrictedLinks;
