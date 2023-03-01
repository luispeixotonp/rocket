import { useTheme } from "@mui/material";
import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexcharts from "src/@core/components/react-apexcharts";

interface BarChartProps {
  data: any;
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const theme = useTheme()

  const getColor = (value: number) => {
    const maxValue = data.reduce((prev: any, current: any) => (prev.value > current.value) ? prev : current)
    const minValue = data.reduce((prev: any, current: any) => (prev.value < current.value) ? prev : current)

    if (value === maxValue.value) {
      return '#2B8B09'
    }

    if (value === minValue.value) {
      return '#D62828'
    }

    return '#EBA83A'
  }

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
        horizontal: true,
        borderRadius: 20,
        distributed: false,

        // colors: {
        //   ranges:
        //     data ? data.map((item: any, index: number) => {
        //       if (index === data.length - 1){
        //         return {
        //           from: (index + 1) * 50,
        //           to: (index + 1) * 50 + 50,
        //           color: '#000',
        //         }
        //       }
              
        //       return {
        //         from: (index + 1) * 50,
        //         to: (index + 1) * 50 + 50,
        //           color: '#004a62',
        //       }
        //     }) : []
              

        // },

        // columnWidth: '80',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    grid: {
      show: false,
    },

    series: [{
      data:  data ? data.map((item: any, index: number) => {
        return {
          x: item.label,
          y: item.value,
          color: index === data.length - 1 ? getColor(item.value) : '#D6D9DA',
          fillColor: index === data.length - 1 ? getColor(item.value) : '#D6D9DA'
        }
      }) : []
    }],

    // series:
    //     data ? data.map((item: any, index: number) => {
    //     return {
    //       name: item.label,
    //       data:[{
    //         x: item.label,
    //         y: item.value,
    //         color: index === data.length - 1 ? getColor(item.value) : '#D6D9DA',
    //         fillColor: index === data.length - 1 ? getColor(item.value) : '#D6D9DA'
    //       }]
    //     }
    //   }) : [],
    dataLabels: {
      enabled: true,
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

export default BarChart;