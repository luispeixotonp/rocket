import React from "react";
import { Container, Avatar, Position, Cicle, Name, Points, Icon } from "./styles";

interface UserPodiumProps {
  position: number;
  name: string;
  points: number;
}


const UserPodium: React.FC<UserPodiumProps> = ({
  position,
  name,
  points,
}) => {
  const color = {
    1: '#6CBC0B',
    2: '#39CEF3',
    3: '#EAD40C',
  } as any;

  return (
    <Container position={position}>
      <Avatar position={position} color={color[position]}>
        <Position>{position}º</Position>
        <Cicle><Icon /></Cicle>
      </Avatar>

      <Name>{name}</Name>
      <Points color={color[position]}>{points}</Points>
    </Container>
  )
}

export default UserPodium;