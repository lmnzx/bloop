import React from "react";
import { Helmet } from "react-helmet";
import { Link, Route, Switch } from "react-router-dom";
import About from "./about";
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
      </Helmet>
      <div className="min-h-screen flex flex-col mx-auto max-w-3xl px-4 md:px-0">
        <header className="py-40 sm:py-20 ">
          <h1 className="text-4xl sm:text-6xl font-black text-center sm:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-pink-500 to-green-500">
            hello
          </h1>
        </header>
        <Link to="/about">About</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
