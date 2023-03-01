import { TableBody, TableCell, TableRow } from '@mui/material';
import styled from 'styled-components';

interface RowProps {
  isOdd: boolean;
}

export const Container = styled.div`
`;

export const Row = styled(TableRow).attrs({
  style: {
    borderRadius: 110,
  },
}) <RowProps>`
  background-color: ${(props) => (props.isOdd ? '#F5F5F5' : '#fff')};
  border: none;
  &:hover {
    opacity: 0.8;
  }

`;

export const Body = styled(TableBody)``;
export const ColumnName = styled(TableCell).attrs({
  component: 'th',
  style: {
    fontWeight: 700,
    color: '#184485',
    fontFamily: 'Poppins',
    fontSize: '0.925rem',
    border: '0px',
  },
})`
  font-size: 1rem;
  color: #184485;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
`;

export const Cell = styled(TableCell).attrs({
  style: {
    border: '0px',
    fontFamily: 'Poppins',
    fontSize: '0.925rem',
    fontWeight: 400,
    color: '#545151',
  },
})`
    &:first-child {
      border-radius: 10px 0 0 10px;

    }
    &:last-child {
      border-radius: 0 10px 10px 0;
    }
`;
