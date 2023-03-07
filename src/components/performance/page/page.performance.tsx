// ** MUI Imports
import Grid from '@mui/material/Grid'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ChartSwitch from 'src/components/charts/chart-switch/chart-switch'
import Empty from 'src/components/empty/empty'

// import Empty from 'src/components/empty/empty'
import Loading from 'src/components/loading/loading'
import MetricCard from 'src/components/metric-card/metric-card'
import { fetchPerformancePage } from 'src/store/performance.slice'
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
  metricColor: string
}

const PerformancePage: React.FC<PerformancePageProps> = ({ metrics, data, page }) => {
  const dispatch = useDispatch<any>();
  const status = useSelector((state: RootState) => state.performance.statusPage);
  const alreadyLoaded = useSelector((state: RootState) => state.performance.performancePages[page].CODVEND == state.auth.CODVEND);
  const CODVEND = useSelector((state: RootState) => state.auth.CODVEND);

  useEffect(() => {
    dispatch(fetchPerformancePage(page));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CODVEND]);

  const Metric: React.FC<MetricProps> = ({ size, type, value, metricColor }) => {
    return (<Grid item xs={12} md={size}>
      <MetricCard type={type} value={value} colorResult={metricColor} />
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
            return "#6CBC0B";
          }
        };

        return (

          // @ts-ignore
          <Metric key={index} size={2.4} type={key} value={metrics[key]} metricColor={key === 'result' ? getValue((Number(metrics['percentage']))) : null} />
        )
      })}
    </>
  );

  const renderData = () => {
    if (!data) return null

    if (data.length === 0) return null

    const indexsExpanded = [2, 5, 8, 11, 14, 17]
    const last = data.length - 1
    const tableLength = data.filter((item: any) => item.type === 'table')?.length
    const notTableLength = data.filter((item: any) => item.type !== 'table')?.length

    // const check =  index !== last && index !== penultimate;

    const check = (index: number) => {
      if (tableLength > notTableLength) {
        return true
      }
      if (index == last && check(index - 1)) {
        return true
      }
      if (indexsExpanded.includes(index)) {
        return true
      }
      if (indexsExpanded.includes(index - 1) && index + 1 == last && indexsExpanded.includes(index + 1)) {
        return true
      }

      return false
    }


    return (<>
      {data.map((item, index) => {
        return (
          <ChartSwitch key={index} data={item} size={check(index) ? 'expanded' : 'medium'} />
        )
      })}
    </>
    )
  }
  if (status === 'loading' && !alreadyLoaded) {
    return (
      <Grid container>
        <Loading visible={true} />
      </Grid>
    )
  }

  if (status == 'success'|| alreadyLoaded) {
    return (
      <Grid container spacing={6}>
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

  if (status == 'error') {
    return (
      <Grid container>
        <Empty/>
      </Grid>
    )
  }

  return (
    <Grid container>
      <Loading visible={true} />
    </Grid>
  )


}
export default PerformancePage
