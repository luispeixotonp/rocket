import React from "react";
import { Chart, Container, Content, Title } from "./styles";


interface ContainerChartProps {
  title: string;
  children: React.ReactNode;
  isTable?: boolean;
  disable: boolean;
}


const ContainerChart: React.FC<ContainerChartProps> = ({ title, children, isTable, disable }) => {
  const activeBorder = !isTable && !disable;
  
return (
    <Container sx={disable ?{ backgroundColor: 'transparent', boxShadow: 'none' } : {}}>
      <Content >
        {disable ? null : <Title>{title}</Title>}
        {activeBorder ? <Chart>{children}</Chart> : children}

      </Content>
    </Container>
  )
};

export default ContainerChart;