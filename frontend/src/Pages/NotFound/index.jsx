import React from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  return (
    <div>
      <h1>
        Page <span style={{ color: "blue" }}>{location.pathname}</span> not
        found
      </h1>
      <Link to="/" style={{ color: "blue", fontWeight: "bold" }}>
        Home Page &rarr;
      </Link>
    </div>
  );
};

export default NotFound;
