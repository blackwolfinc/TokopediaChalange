import React from "react";
import { Container } from "@material-ui/core";
import RoutesProject from "./RoutesProject";
import MenuAppBar from "../../Components/Navbar";

export const Layout = (props) => {
  return (
    <Container maxWidth="lg">
      <RoutesProject />
    </Container>
  );
};
