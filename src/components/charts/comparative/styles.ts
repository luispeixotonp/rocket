import CardMaterial from "@mui/material/Card";
import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.div`
    flex-direction: column;
    display: flex;
`;

export const Card = styled(CardMaterial).attrs({
    sx: {
        backgroundColor: '#FFEBCE',
        color: 'none',
        margin: '0px',
    }
})`
    flex: 4;
    padding: 24px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;
export const IconContent = styled.div`
    width: 40px;
    align-items: center;
    justify-content: center;
    display: flex;
    height: 40px;
    border-radius: 50%;
    background-color: #FFF;
`;


export const CompareCard = styled.div`
    flex: 1;
    padding: 16px;
    align-items: center;
    justify-content: center;
    display: flex;

`;


export const Title = styled.text.attrs({
    sx: {
        color: '#184485',
    }
})`
    font-size: 1.5rem;
    font-family: 'Poppins', sans-serif;
    color: '#184485';
    font-weight: 600;
`;

export const Subtitle = styled.text`
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: '#444444';
    font-weight: 400;
`;
