import { Bullseye, Close } from "mdi-material-ui";
import React from "react";
import { Card, CompareCard, Container, Content, IconContent, Subtitle, Title } from "./styles";

interface ComparativeChartProps {
    data: any;
}

const ComparativeChart: React.FC<ComparativeChartProps> = ({ data }) => {
    if(!data || data.length !== 2) return null;
    const renderCard = (label:string, value:string) => (
        <Card>
        <Content>
            <Title>{value}</Title>
            <Subtitle>{label}</Subtitle>
        </Content>
        <IconContent>
            <Bullseye />
        </IconContent>
    </Card>
    )

    return (
        <Container>
            {renderCard(data[0].label, data[0].value)}
            <CompareCard>
            <Close/>
            </CompareCard>
            {renderCard(data[1].label, data[1].value)}
            </Container>
    )
}

export default ComparativeChart