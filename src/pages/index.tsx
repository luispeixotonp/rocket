import Grid from '@mui/material/Grid'

import Table from 'src/views/dashboard/components/table/table.dashboard'
import Progress from 'src/views/dashboard/components/progress/dashboard-progress'
import SalesMonth from 'src/views/dashboard/components/sales-month/sales-month.dashboard'
import Ranking from 'src/views/dashboard/components/ranking/ranking.dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'
import { useEffect } from 'react'
import { fetchPerformanceHome } from 'src/store/performance.slice'
import Loading from 'src/components/loading/loading'

const Dashboard = () => {
  const codvend = useSelector((state: RootState) => state.auth.CODVEND)
  const status = useSelector((state: RootState) => state.performance.statusHome)
  const dispatch = useDispatch<any>()
  useEffect(() => {
    loadData()
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Grid item xs={12} md={8}>
        <Grid container spacing={6}>
          <Grid item xs={12} md={7}>
            <Progress />
          </Grid>
          <Grid item xs={12} md={5}>
            <SalesMonth value='R$ 234 Mil' />
          </Grid>
          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </Grid>
      {/** CONTAINER 2 */}
      <Grid item xs={12} md={4}>
        <Ranking />
      </Grid>
    </Grid>
  )
}
export default Dashboard
