import Grid from '@mui/material/Grid'

import Table from 'src/views/dashboard/components/table/table.dashboard'
import Progress from 'src/views/dashboard/components/progress/dashboard-progress'
import SalesMonth from 'src/views/dashboard/components/sales-month/sales-month.dashboard'
import Ranking from 'src/views/dashboard/components/ranking/ranking.dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useEffect } from 'react'
import { fetchPerformanceHome, resetAlReadyLoaded } from 'src/store/performance.slice'
import { Backdrop, CircularProgress } from '@mui/material'
import Loading from 'src/components/loading/loading'
import ChartSwitch from 'src/components/charts/chart-switch/chart-switch'

const Dashboard = () => {
  const codvend = useSelector((state: RootState) => state.auth.CODVEND)
  const server = useSelector((state: RootState) => state.servers.currentServer)
  const status = useSelector((state: RootState) => state.performance.statusHome)
  const dispatch = useDispatch<any>()
  useEffect(() => {
    loadData()
    
  }, [codvend])

  const loadData = () => {
    dispatch(fetchPerformanceHome({
      // CODVEND: codvend ?? '',
      // URLERP: server?.ipImage ?? '',
      CODVEND: '36',
      URLERP: 'http://acaifruit.fmcdatacom.com.br:8648',
    }))
  }


  return (
    <Grid container spacing={6}>
      {/** CONTAINER 1 */}
      <Loading visible={status === 'loading'} />
      <Grid item xs={12} md={12}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Progress />
          </Grid>
          <Grid item xs={12} md={6}>
            <SalesMonth value='R$ 0' />
          </Grid>
          {/* <ChartSwitch chart='colunaComparativa' size='medium' title='Teste' data={{
            type: 'colunaComparativa',
            name: 'Meta x Realizado',
            data:[
        {
            label: 'Meta',
            data: [
              {
                label: 'Jan',
                value: 50,
              },
              {
                label: 'Fev',
                value: 58,
              },
              {
                label: 'Mar',
                value: 80,
              },
              {
                label: 'Abr',
                value: 53,
              },
              {
                label: 'Mai',
                value: 78,
              },
            ],
        },
        {
          label: 'Realizado',
          data: [
            {
              label: 'Jan',
              value: 112,
            },
            {
              label: 'Fev',
              value: 123,
            },
            {
              label: 'Mar',
              value: 100,
            },
            {
              label: 'Abr',
              value: 83,
            },
            {
              label: 'Mai',
              value: 124,
            },
          ],
      }
      ]}} /> */}
      {/* <ChartSwitch chart='colunaComparativa' size='medium' title='Teste' data={{
      type: 'linha',
      name: 'Total de desconto acumulado',
      subname: 'Meta x Realizado',
      data: [
        {
          title: 'Meta',
          data: [
            { value: 0, label: 'Jan' },
            { value: 10, label: 'Fev' },
            { value: 65, label: 'Mar' },
          ],
        },
        {
          title: 'Realizado',
          data: [
            { value: 1, label: 'Jan' },
            { value: 20, label: 'Fev' },
            { value: 18, label: 'Mar' },
          ],
        },
      ],
    }} /> */}
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </Grid>
      {/** CONTAINER 2 */}
      {/* <Grid item xs={12} md={4}>
        <Ranking />
      </Grid> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={status === 'loading'}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Grid>
  )
}
export default Dashboard
