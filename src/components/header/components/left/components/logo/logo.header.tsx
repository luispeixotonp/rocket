import React from "react";
import { Logo } from "src/components/logo/logo";
import LogoTextHeader from "../logo-text/logoText.header";
import { Container } from "./styles";

const LogoHeader = () => (
  <Container>
    <Logo width={60} height={58} color="#005E8F" />
    <LogoTextHeader />
  </Container>
)

export default LogoHeader;