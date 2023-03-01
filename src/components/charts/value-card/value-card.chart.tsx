import {  Close, Ticket } from "mdi-material-ui";
import React from "react";
import { Card, CompareCard, Container, Content, IconContent, Subtitle, Title } from "./styles";

interface ValueCardChartProps {
    data: any;
    title: string;
}

const ValueCardChart: React.FC<ValueCardChartProps> = ({ data, title }) => {
    if(!data || data.length !== 1) return null;
    const renderCard = (label:string, value:string) => (
        <Card>
        <Content>
            <Title>{value}</Title>
            <Subtitle>{title}</Subtitle>
        </Content>
        
        <IconContent>
            <Ticket sx={{ fontSize: 40, color: '#184485' }}/>
        </IconContent>
    </Card>
    )

    return (
        <Container>
            {renderCard(data[0].label, data[0].value)}
            </Container>
    )
}

export default ValueCardChart