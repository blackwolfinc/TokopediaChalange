
import React from "react";
import { Apolo } from "./Pages/Apolo";
import { Layout } from "./Pages/Layout/Layout";
import { css, cx } from "@emotion/css";


export const App = () => {
  return (
    <div      className={css`
    background-color: blanchedalmond;
  `}>
      <Layout/>
     
    </div>
  );
};
