import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store/store";
import { ServerList } from "./components/server-list/server-list";
import { Container, Title, Subtitle, Content, IconContainer, ServerIcon, Info, ChevronIcon, Button } from "./styles";

export const SelectServers = () => {
  const [visibleServerList, setVisibleServerList] = React.useState(false);
  const serverSelected = useSelector((state: RootState) => state.servers.currentServer)


  const handleOpenServerList = () => {
    setVisibleServerList(true);
  };

  const nameServer = serverSelected != null ? serverSelected.name : 'Nenhum servidor selecionado';

  return (
    <>
      <Container onClick={handleOpenServerList}>
        <Button >
          <Content isSelected={serverSelected != null}>
            <IconContainer>
              <ServerIcon />
            </IconContainer>
            <Info>
              <Title>Servidor</Title>
              <Subtitle>{nameServer}</Subtitle>
            </Info>
            <IconContainer>
              <ChevronIcon />
            </IconContainer>
          </Content>
        </Button>
      </Container>
      <ServerList visible={visibleServerList} setVisible={setVisibleServerList} />
    </>
  )
}