import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { Container, Text } from "./styles";

const UsernameHeader = () => {
  const name = useSelector((state: RootState) => state.auth.user?.NOMEUSU);

  return (
    <Container>
      <Text>Olá, {name}!</Text>
    </Container>
  )
}
export default UsernameHeader;