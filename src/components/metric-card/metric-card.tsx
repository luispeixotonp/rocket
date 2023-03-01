import React from "react";
import { Container, Content, IconContainer, ResultTitle, ResultValue, Title, Value } from "./styles";
import { Bullseye, Finance, PercentOutline, Weight } from 'mdi-material-ui'
import { Card } from "@mui/material";


interface MetricCardProps {
  type: string;
  value: string;
  colorResult?: string;
}

const data = {
  goal: {
    title: 'Meta',
    icon: <Bullseye />,
    color: '#CBE4FB',
  },
  realized: {
    title: 'Realizado',
    icon: <Finance />,
    color: '#D0E1D4',
  },

  percentage: {
    title: 'Percentual',
    icon: <PercentOutline />,
    color: '#F9E4C9',
  },

  wheight: {
    title: 'Peso',
    icon: <Weight />,
    color: '#DDD7FF',
  },

  result: {
    title: 'Resultado',
    icon: null,
    color: '#46932B',
  },
}

const MetricCard: React.FC<MetricCardProps> = ({ type, value, colorResult }) => {
  //@ts-ignore
  const { title, icon, color } = data[type];

  if (type === 'result') {
    return (
      <Card>
        <Container color={colorResult} type="result" >
          <ResultTitle>Resultado</ResultTitle>
          <ResultValue>{value}</ResultValue>
        </Container>
      </Card>
    )
  }

  return (
    <Card>
      <Container>
        <IconContainer color={color}>
          {icon}
        </IconContainer>

        <Content>
          <Title>{title}</Title>
          <Value>{value}</Value>
        </Content>
      </Container>
    </Card>
  )
}

export default MetricCard;