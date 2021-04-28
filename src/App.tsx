import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useHelloQuery } from "./generated-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/index";
import About from "./pages/about";

export default function App() {
  const { loading, error, data } = useHelloQuery();

  console.log(data);

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bloop 🐱 </title>
        <link rel="icon" type="image/svg+xml" href="static/pawprint.svg" />
      </Helmet>
      <div>
        <p>{data?.hello.text}</p>
        <p>{data?.hello.time}</p>
      </div>
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
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}
