import React from "react";
import { useDispatch } from "react-redux";
import { setShowMenu } from "src/store/menu.slice";
import Logo from "./components/logo/logo.header";
import UsernameHeader from "./components/username/username.header";
import { Container, IconButton } from "./styles";
import * as Icon from "mdi-material-ui";

const LeftHeader = () => {
  const dispatch = useDispatch()
  const handleDrawerOpen = () => {
    dispatch(setShowMenu(true))
  }

  return (
    <Container>
      <IconButton onClick={handleDrawerOpen}>
        <Icon.Menu sx={{ fontSize: 30 }} />
      </IconButton>
      <Logo />
      <UsernameHeader />
    </Container>
  )
};

export default LeftHeader;