import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar: React.FC = () => {
  return (
    <nav>
      <div className="nav-wrapper blue darken-3 px1">
        <div className="brand-logo">Home</div>
        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/" id="todoList">
              Todo list
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" id="about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
