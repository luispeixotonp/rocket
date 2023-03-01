import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { Cell } from './styles';

interface Data {
  position: string;
  name: string;
  point: number;
}

function createData(
  position: string,
  name: string,
  point: number,
): Data {

  return { position, name, point };
}

const rows = [
  createData('4', 'Jose Antonio Souza', 2150),
  createData('5', 'Marcia Almeida', 2050),
  createData('6', 'Geraldo Souza', 1900),
  createData('7', 'Sonia Fonseca Martins', 1860),
  createData('8', 'Paulo De Castro e Silva', 1800),
  createData('9', 'Emilio Albuquerque Pereira', 1790),
  createData('10', 'Otaviano Costa Júnior', 1600),
];

export default function TableRanking() {
  return (
    <TableContainer>
      <Table aria-label="sticky table">
        <TableBody sx={{ border: 'none' }}>
          {rows
            .map((row) => {
              return (
                <TableRow hover key={row.position} sx={{ '&:last-child td, &:last-child th': { border: 0, boxShadow: 'none' } }}>
                  <Cell>{row.position}º</Cell>
                  <Cell>{row.name}</Cell>
                  <Cell>{row.point} pts</Cell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}