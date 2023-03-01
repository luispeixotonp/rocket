// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartSwitch from 'src/components/charts/chart-switch/chart-switch'
import Empty from 'src/components/empty/empty'
import Loading from 'src/components/loading/loading'
import MetricCard from 'src/components/metric-card/metric-card'
import { fetchPerformancePage, resetAlReadyLoaded } from 'src/store/performance.slice'
import { RootState } from 'src/store/store'
import { Metrics } from 'src/types/metrics'

interface PerformancePageProps {
  metrics: Metrics
  data: any[]
  page: string
}

interface MetricProps {
  size: number
  type: string
  value: any
}

const PerformancePage: React.FC<PerformancePageProps> = ({ metrics, data, page }) => {
  const dispatch = useDispatch<any>();
  const status = useSelector((state: RootState) => state.performance.statusPage);
  const alreadyLoaded = useSelector((state: RootState) => state.performance.performancePages[page].CODVEND == state.auth.CODVEND);
  const CODVEND = useSelector((state: RootState) => state.auth.CODVEND);

  useEffect(() => {
    dispatch(fetchPerformancePage(page));
  }, [CODVEND]);

  const Metric: React.FC<MetricProps> = ({ size, type, value, color }) => {
    return (<Grid item xs={12} md={size}>
      <MetricCard type={type} value={value} colorResult={color} />
    </Grid>
    )
  }

  const renderMetrics = () => (
    <>
      {Object.keys(metrics).map((key, index) => {
        const getValue = (value: number) => {
          if (value >= 0 && value < 30) {
            return "#D62828";
          } else if (value >= 30 && value < 60) {
            return "#EBA83A";
          } else if (value >= 60 && value <= 100) {
            return  "#6CBC0B";
          }
        };

        return (

          // @ts-ignore
          <Metric key={index} size={2.4} type={key} value={metrics[key]} color={key === 'result' ? getValue((Number(metrics['percentage']))) : null} />
        )
      })}
    </>
  );

  const renderData = () => {
    if (!data) return null

    if (data.length === 0) return null

    const indexsExpanded = [2, 5, 8, 11, 14, 17]
    const last = data.length - 1
    const penultimate = data.length - 2

    return (<>
      {data.map((item, index) => {
        return (
          <ChartSwitch key={index} data={item} size={indexsExpanded.includes(index) && index !== last && index !== penultimate ? 'expanded' : 'medium'} />
        )
      })}
    </>
    )
  }

  return (
    <Grid container spacing={6}>
      <Loading visible={status === 'loading' && !alreadyLoaded} />
      <Grid item xs={12} md={12}>
        <Grid container spacing={6}>
          {/* <Empty /> */}
          {renderMetrics()}
          {renderData()}
        </Grid>
      </Grid>
    </Grid>
  )


}
export default PerformancePage
