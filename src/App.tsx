import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useHelloQuery } from "./generated-types";

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
        <h1>meow</h1>
      </div>
    </Fragment>
  );
}
