import React from "react";
import "../App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./NavBar";
import HomePage from "../pages/HomePage";
import { AboutPage } from "../pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={AboutPage} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
