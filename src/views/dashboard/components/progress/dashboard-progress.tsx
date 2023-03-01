// ** MUI Imports
import Card from '@mui/material/Card'
import Indicator from './components/progress-indicator/progress-indicator.dashboard'
import { Content } from './styles'
import Message from './components/progress-message/progress-message.dashboard'
import { RootState } from 'src/store/store'
import { useSelector } from 'react-redux'

const DashboardProgress = () => {
  const result = useSelector((state: RootState) => state.performance.performanceResult) || '0'
  console.log(result)

  return (
    <Card>
      <Content>
        <Indicator targetPercentage={parseInt(result)} size={150} />
        <Message percentage={parseInt(result)} />
      </Content>
    </Card>
  )
}

export default DashboardProgress
