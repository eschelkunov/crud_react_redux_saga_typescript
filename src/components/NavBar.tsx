import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3 px1">
        <NavLink to="/" className="brand-logo">
          Home
        </NavLink>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/add">Add post</NavLink>
          </li>
          <li>
            <NavLink to="/">List of post</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
