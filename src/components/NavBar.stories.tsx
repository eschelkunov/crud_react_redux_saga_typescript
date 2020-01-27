import React from "react";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";

export default {
  title: "Navbar",
  component: NavBar
};

export const Default = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavBar />
      </div>
    </BrowserRouter>
  );
};
