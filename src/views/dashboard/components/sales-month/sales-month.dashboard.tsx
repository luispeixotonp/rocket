// ** React Imports
import React from 'react'

import Card from '@mui/material/Card'
import { Content, Divider, Label, Value } from './styles'

interface SalesMonthDashboardProps {
  value: string
}

const SalesMonthDashboard: React.FC<SalesMonthDashboardProps> = ({ value }) => {
  return (
    <Card>
      <Content sx={{
        height: 190,
      }}>
        <Value>{value}</Value>
        <Divider />
        <Label>Vendas do mês</Label>
      </Content>
    </Card>
  )
}

export default SalesMonthDashboard
