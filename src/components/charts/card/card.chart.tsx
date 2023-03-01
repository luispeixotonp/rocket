import { Grid } from "@mui/material"
import React from "react"
import ContainerChart from "../container/container.chart"

interface CardProps {
  title: string
  size: number
  children: React.ReactNode
  isTable?: boolean
  disable: boolean
}

const ChartCard: React.FC<CardProps> = ({ title, size, children, isTable = false, disable }) => {
return (
    <Grid item xs={12} md={size}>
      <ContainerChart isTable={isTable} title={title} disable={disable}>
        {children}
      </ContainerChart>
    </Grid>
  )
}

export default ChartCard