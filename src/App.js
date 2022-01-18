import React from "react";
import { Apolo } from "./Pages/Apolo";
import { Layout } from "./Pages/Layout/Layout";
import { css, cx } from "@emotion/css";
import "./Assets/Scss/App.scss"
import MenuAppBar from "./Components/Navbar";

export const App = () => {
  return (
    <div
      className={css`
      // background: rgb(255,191,94);
      background: -moz-linear-gradient(202deg, rgba(255,191,94,0.9640231092436975) 14%, rgba(255,191,94,1) 54%, rgba(213,139,28,1) 87%);
      background: -webkit-linear-gradient(202deg, rgba(255,191,94,0.9640231092436975) 14%, rgba(255,191,94,1) 54%, rgba(213,139,28,1) 87%);
      background: linear-gradient(202deg, rgba(255,191,94,0.9640231092436975) 14%, rgba(255,191,94,1) 54%, rgba(213,139,28,1) 87%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffbf5e",endColorstr="#d58b1c",GradientType=1);
      `}
    >
      <MenuAppBar/>
      <Layout />
    </div>
  );
};
