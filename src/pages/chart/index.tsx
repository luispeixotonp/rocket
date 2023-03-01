// ** MUI Imports
import Grid from '@mui/material/Grid'
import BarChart from 'src/components/charts/bar/bar.charts'
import ChatCard from 'src/components/charts/card/card.chart'
import ContainerChart from 'src/components/charts/container/container.chart'
import DonutChart from 'src/components/charts/donut/donut.chart'
import LineChart from 'src/components/charts/line/line.chart'
import TableChart from 'src/components/charts/table/table.chart'
import MetricCard from 'src/components/metric-card/metric-card'

const Chart = () => {
  return (
    <Grid container spacing={6}>
      {/** CONTAINER 1 */}
      <Grid item xs={12} md={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={2.5}>
            <MetricCard type='goal' value='R$ 180.000' />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <MetricCard type='realized' value='R$ 249.526' />
          </Grid>
          <Grid item xs={12} md={2.5}>
            <MetricCard type='percentage' value='100%' />
          </Grid>
          <Grid item xs={12} md={2.25}>
            <MetricCard type='wheight' value='05' />
          </Grid>
          <Grid item xs={12} md={2.25}>
            <MetricCard type='result' value='236' />
          </Grid>
          <Grid item xs={12} md={6}>
            <ContainerChart title='Vendas por mês'>
              <BarChart />
            </ContainerChart>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContainerChart title='Vendas por mês' >
              <DonutChart />
            </ContainerChart>
          </Grid>

          <Grid item xs={12} md={12}>
            <ContainerChart title='Vendas por mês' >
              <LineChart />
            </ContainerChart>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContainerChart isTable title='Top 10 clientes com menos descontos' >
              <TableChart />
            </ContainerChart>
          </Grid>
          <Grid item xs={12} md={6}>
            <ContainerChart isTable title='Top 10 clientes com menos descontos' >
              <TableChart />
            </ContainerChart>
          </Grid>
          <ChatCard title='Top 10 clientes com menos descontos' size={12}>
            <TableChart />
          </ChatCard>
        </Grid>
      </Grid>
    </Grid>
  )
}
export default Chart
