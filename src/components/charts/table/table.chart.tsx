// @ts-nocheck
import Table from '@mui/material/Table'
import MuiTableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import { Body, Cell, Row } from './styles'
import { styled, TableRow } from '@mui/material'
import { ColumnName } from './styles'

interface TableChartProps {
  data: any
}

const TableChart: React.FC<TableChartProps> = ({ data }) => {
  const isOdd = (index: number) => {
    return index % 2 === 0
  }

  const TableHead = styled(MuiTableHead)`
     & .MuiTableCell-root {
    background-color: #fff;
  }
  `;


  return (
    <TableContainer sx={{ maxHeight: 440 }} style={{ backgroundColor:'#fff' }}>
      <Table stickyHeader sx={{backgroundColor:'#fff'}} style={{ backgroundColor:'#fff' }}>
        <TableHead sx={{backgroundColor:'#000'}}>
          <TableRow>
            {
              data.fields.map((field: any, index: number) => (
                <ColumnName key={index}>{field.label}</ColumnName>
              ))
            }
          </TableRow>
        </TableHead>
        <Body>
          {data.data.map((e: any, index: number) => (
            <Row hover key={index} isOdd={isOdd(index)}>
              {Object.keys(e).map((key: string, index: number) => (
                <Cell key={index}>{e[key]}</Cell>
              ))}
            </Row>
          ))}
        </Body>
      </Table>
    </TableContainer>
  )
}

export default TableChart
