import { Card, TableCell } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Card)`
  padding: 1rem;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;


export const Cell = styled(TableCell)`
    border: none;
    font-size: 1rem;
    color: #000;
    font-weight: 500;
`;


export const Title = styled.text`
  font-size: 1.125rem;
  font-weight: 600;
  color: #184485;
  font-family: 'Poppins', sans-serif;
`;

export const Badge = styled.text`
  font-size: 0.938rem;
  font-weight: 700;
  color: #fff;
  font-family: 'Poppins', sans-serif;
  background-color: #93278F;
  padding: 8px 18px;
  border-radius: 10px;
`;


