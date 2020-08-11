import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Landing
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/main"
          className={location.pathname === "/main" ? "nav-link active" : "nav-link"}
        >
          Main
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/home"
          className={location.pathname === "/home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/signout"
          className={location.pathname === "/signout" ? "nav-link active" : "nav-link"}
        >
          Sign Out
        </Link>
      </li>
    </ul>
  );
}

export default Header;
