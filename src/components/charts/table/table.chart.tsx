import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableContainer from '@mui/material/TableContainer'
import { Body, Cell, Row } from './styles'
import { TableRow } from '@mui/material'
import { ColumnName } from './styles'

interface TableChartProps {
  data: any
}

const TableChart: React.FC<TableChartProps> = ({ data }) => {
  const isOdd = (index: number) => {
    return index % 2 === 0
  }

  return (
    <TableContainer sx={{ maxHeight: 350 }}>
      <Table aria-label="simple table" >
        <TableHead>
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
