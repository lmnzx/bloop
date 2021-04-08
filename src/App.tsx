import React from "react";
import { Helmet } from "react-helmet-async";

export default function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Bloop ✨</title>
      </Helmet>
      <div>
        <p>Hello</p>
      </div>
    </div>
  );
}
