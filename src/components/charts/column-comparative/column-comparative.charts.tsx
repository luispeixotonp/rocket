// @ts-nocheck
import { useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexcharts from "src/@core/components/react-apexcharts";

interface ColumnComparativeChartProps {
  data: any;
}

const ColumnComparativeChart: React.FC<ColumnComparativeChartProps> = ({ data }) => {
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false,
        }
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 20,
        distributed: false,
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    colors: ['#D1CBF8', '#907EF4'],
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    grid: {
      show: false,
    },
    series: 
      data ? data.map((item: any) => {
        return {
      name: item.label,
      data:  item.data ? item.data.map((e: any) => {
        return {
          x: e.label,
          y: e.value,
        }
      }) : []
      }
    }) : [],
    dataLabels: {
      enabled: false,
      style: { fontSize: '16px', fontWeight: 600, fontFamily: 'Poppins', colors: ['#263238'] },
      textAnchor: 'middle',
    },
    states: {
      hover: {
        filter: { type: 'none', value: 0 }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      tickPlacement: 'on',

      // enabled center
      labels: {
        show: true,
        trim: true,
        style: {
          colors: [],
          fontSize: '16px',
          fontFamily: 'Poppins',
          fontWeight: 400,
          cssClass: 'apexcharts-xaxis-label',
        },
        offsetX: 0,
        offsetY: 0,
        rotate: 0,
        formatter: undefined,
      },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    tooltip: {
      x: { show: true, },
    },
    yaxis: {
      show: true,
      axisBorder: { show: true },
      axisTicks: { show: true },
      tickAmount: 4,
    }
  }

  return (
    <ReactApexcharts height={318} type='bar' options={options} series={options.series } />
  )
};

export default ColumnComparativeChart;