import React from "react";
import { Helmet } from "react-helmet-async";
import { useHelloQuery } from "../generated-types";

export default function index() {
  const { loading, error, data } = useHelloQuery();

  return (
    <div>
      <Helmet>
        <title>{data?.hello.text}</title>
      </Helmet>
      <p>Index Page</p>
      <p>{data?.hello.text}</p>
      <p>{data?.hello.time}</p>
    </div>
  );
}
