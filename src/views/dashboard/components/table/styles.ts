import { TableBody, TableCell, TableRow } from '@mui/material';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #184485;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0.5rem;
  padding: 16px;
`;

export const Row = styled(TableRow).attrs({
  sx: {
    margin: 10,
    padding: '0px',
  },
})`
  background-color: #F6F6F6;
  border: 10px solid #fff;
  padding: 16px;
  border-radius: 0.5rem;
  transition: 0.2s;

  &:hover {
    background-color: #F6F6F6;
    cursor: pointer;
    opacity: 0.8;
  }

`;

export const Body = styled(TableBody)`
  background-color: #fff;
  padding: 100px;
`;

export const Cell = styled(TableCell).attrs({
  sx: {
    margin: '10px',}
    
})`
    border: none;
    font-size: 1rem !important;
    font-family: 'Poppins', sans-serif;
    color: #545151;
    font-weight: 600;
    margin: 10px 0px;

    &:first-child {
      border-radius: 30px 0 0 30px;

    }
    &:last-child {
      border-radius: 0 30px 30px 0;
    }
`;
