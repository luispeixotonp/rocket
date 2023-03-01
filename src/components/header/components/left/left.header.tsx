import React from "react";
import Logo from "./components/logo/logo.header";
import UsernameHeader from "./components/username/username.header";
import { Container } from "./styles";

const LeftHeader = () => {
  return (
    <Container>
      <Logo />
      <UsernameHeader />
    </Container>
  )
};

export default LeftHeader;