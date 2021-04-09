import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useQuery, gql } from "@apollo/client";

const QUERY = gql`
  query {
    hello
  }
`;

export default function App() {
  const { loading, error, data } = useQuery(QUERY);

  const output = loading ? "Loading..." : error ? "ERROR" : data.hello;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bloop 🐱 </title>
        <link rel="icon" type="image/svg+xml" href="static/pawprint.svg" />
      </Helmet>
      <div>
        <p>{output}</p>
      </div>
    </Fragment>
  );
}
