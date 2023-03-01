// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import { Body, Cell, Row } from './styles'
import { Button, TableRow } from '@mui/material'
import { ChevronRight } from 'mdi-material-ui'
import { useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useRouter } from 'next/router'

interface RowType {
  title: string;
  goal: string;
  realized: string;
  percentage: string;
  wheight: string;
  result: string;
}


const rows: RowType[] = [
  {
    title: 'Metas de vendas mensal',
    goal: 'R$ 180.000',
    realized: 'R$ 249.526',
    percentage: '100',
    wheight: '05',
    result: '236',
  },
  {
    title: 'Mix de vendas',
    goal: 'R$ 180.000',
    realized: 'R$ 153.526',
    percentage: '85',
    wheight: '08',
    result: '236',
  },
  {
    title: 'Rentabilidade',
    goal: 'R$ 180.000',
    realized: 'R$ 153.526',
    percentage: '85',
    wheight: '16',
    result: '236',
  },
  {
    title: 'Ticket médio',
    goal: 'R$ 180.000',
    realized: 'R$ 72.526',
    percentage: '40',
    wheight: '14',
    result: '236',
  },
  {
    title: 'Positivação',
    goal: 'R$ 180.000',
    realized: 'R$ 249.526',
    percentage: '40',
    wheight: '02',
    result: '236',
  },
  {
    title: 'Novas Vendas',
    goal: 'R$ 180.000',
    realized: 'R$ 62.695',
    percentage: '40',
    wheight: '18',
    result: '236',
  },
  {
    title: 'Desconto',
    goal: 'R$ 180.000',
    realized: 'R$ 72.526',
    percentage: '40',
    wheight: '14',
    result: '236',
  },
]

const DashboardTable = () => {
  const route = useRouter()

  const formatData = (metrics: any) => {
    return Object.keys(metrics).map(key => {
      return {
        routeName: key,
        title: metrics[key].title,
        data: metrics[key].metrics,
      };
    });
  }

  const routes = {
    salesMix: '/performance/mix-vendas',
    profitability: '/performance/rentabilidade',
    newSales: '/performance/novas-vendas',
    discount: '/performance/desconto',
    positivity: '/performance/positivacao',
    bonus: '/performance/bonificacao',
    monthlySalesTarget: '/performance/meta-venda',
    averageTicket: '/performance/ticket-medio',
  }

  const data = useSelector((state: RootState) => formatData(state.performance.performancePages))
  console.log(data)



  const getStatusColor = (value: string): string => {
    const valueNumber = Number(value)
    if (valueNumber >= 80) return 'good'
    if (valueNumber >= 50) return 'middle'

    return 'bad'

  }

  return (
    <Card>
      <TableContainer sx={{ padding: 4 }}>
        <Table sx={{ minWidth: 800 }} >
          <TableHead>
            <TableRow>
              <TableCell>Meta</TableCell>
              <TableCell>Realizado</TableCell>
              <TableCell>%</TableCell>
              <TableCell>Peso</TableCell>
              <TableCell>Resultado</TableCell>
              <TableCell width={40}></TableCell>
            </TableRow>
          </TableHead>
          <Body>
            {data.map((row, index) => (
              <Row hover  key={index} onClick={() => {
                route.push(routes[row.routeName])
              }}>
                <Cell>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '1rem !important', color:'#184485', fontFamily:'Poppins' }}>{row.title}</Typography>
                    <Typography sx={{ fontSize: '1rem !important', fontFamily:'Poppins' }} variant='caption'>{row.data.goal}</Typography>
                  </Box>
                </Cell>
                <Cell>{row.data.realized}</Cell>
                <Cell>{row.data.percentage}</Cell>
                <Cell>{row.data.wheight}</Cell>
                <Cell>
                  <Chip
                    label={row.data.result}
                    color={getStatusColor(row.data.percentage) as ThemeColor}
                    sx={{
                      height: 24,
                      fontSize: '0.938rem',
                      textTransform: 'capitalize',
                      fontWeight: 800,
                      fontFamily: 'Poppins',
                      '& .MuiChip-label': { fontWeight: 600 }
                    }}
                  />
                </Cell>
                <Cell width={40}>
                  <ChevronRight />
                </Cell>
              </Row>
            ))}
          </Body>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
