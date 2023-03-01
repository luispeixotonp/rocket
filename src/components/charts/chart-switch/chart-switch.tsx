import React from "react";
import { PerformanceChartType } from "src/types/performance/performance.types";
import AreaChart from "../area/area.chart";
import BarChart from "../bar/bar.charts";
import ChartCard from "../card/card.chart";
import ColumnComparativeChart from "../column-comparative/column-comparative.charts";
import ColumnChart from "../column/column.charts";
import ComparativeChart from "../comparative/comparative.chart";
import DonutChart from "../donut/donut.chart";
import LineChart from "../line/line.chart";
import TableChart from "../table/table.chart";
import ValueCardChart from "../value-card/value-card.chart";

interface ChartSwitchProps {
  chart: PerformanceChartType;
  data: any;
  title: string;
  size: 'expanded' | 'medium';
}

const ChartSwitch: React.FC<ChartSwitchProps> = ({ data, size }) => {
  const charts = {
    bar: <BarChart data={data.data} />,
    pizza: <DonutChart data={data.data} />,
    table: <TableChart data={data} />,
    linha: <LineChart data={data.data} />,
    area: <AreaChart data={data.data} />,
    colunaComparativa: <ColumnComparativeChart data={data.data} key={data.name} />,
    comparative: <ComparativeChart data={data.data} />,
    valueCard: <ValueCardChart data={data.data} title={data.name} />,
  }

  const sizeType = {
    expanded: 12,
    medium: 6,
  }

  const notCard = ['comparative', 'valueCard']

  return (
    <ChartCard title={data.name} size={sizeType[size]} disable={notCard.includes(data.type)}>
      {charts[data.type]}
    </ChartCard>
  )
}

export default ChartSwitch