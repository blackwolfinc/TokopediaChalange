import React from "react";
import { Apolo } from "./Pages/Apolo";
import { Layout } from "./Pages/Layout/Layout";
import { css, cx } from "@emotion/css";
import "./Assets/Scss/App.scss"

export const App = () => {
  return (
    <div
      className={css`
        background-color: #ffbf5e;
        

      `}
    >
      <Layout />
    </div>
  );
};
