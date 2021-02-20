import React from "react";
import { Helmet } from "react-helmet";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Home from "./pages/Home";
// import { useQuery, gql } from "@apollo/client";

// const QUERY = gql`
//   query {
//     hello
//   }
// `;

function App() {
  // const { loading, error, data } = useQuery(QUERY);

  // const title = loading ? "Loading..." : data.hello;

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bloop ✨</title>
        <link
          rel="icon"
          type="image/png"
          href="../static/favicon.ico"
          sizes="16x16"
        />
      </Helmet>
      <div>
        <Nav />
        <Switch>
          <Route exact component={Home} path="/" />
          <Route exact component={About} path="/about" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
