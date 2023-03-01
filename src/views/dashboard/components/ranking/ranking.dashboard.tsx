import React from "react";
import Podium from "./components/podium/podium.ranking";
import Table from "./components/table/table.ranking";
import { Badge, Container, Header, Title } from "./styles";

const RankingDashboard = () => {
  return (
    <Container>
      <Header>
        <Title>Ranking Time de Vendas</Title>
        <Badge>
          Acumulado
        </Badge>
      </Header>
      <Podium />
      <Table />
    </Container>
  )
}

export default RankingDashboard;