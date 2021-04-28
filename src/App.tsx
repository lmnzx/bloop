import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { Switch, Route, Link } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";

export default function App() {
  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bloop 🐱 </title>
        <link rel="icon" type="image/svg+xml" href="static/pawprint.svg" />
      </Helmet>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center bg-red-300">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
}
