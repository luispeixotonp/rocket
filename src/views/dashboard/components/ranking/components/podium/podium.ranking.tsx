import React from "react";
import UserPodium from "./components/user.podium";
import { Container, Content } from "./styles";

const PodiumRanking = () => {
  return (
    <Container>
      <Content>
        <UserPodium name="Maria Júlia" position={2} points={6589} />
        <UserPodium name="José Carlos" position={1} points={6589} />
        <UserPodium name="Marcos S." position={3} points={6589} />
      </Content>
    </Container>
  )
}

export default PodiumRanking;