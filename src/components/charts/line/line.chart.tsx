// @ts-nocheck
import { ApexOptions } from 'apexcharts';
import React from 'react';
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface LineChartProps {
  data: any;
}

const LineChart:React.FC<LineChartProps> = ({data}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'area',
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: true,
          zoomout: true,
          pan: false,
          reset: false,
        }

      },
      animations: {
        enabled: true,
        easing: 'easeout',
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    colors: ['#8D79F6', '#FF9364', '#F6D98B', '#79F6E1', '#FFBE64', '#8DDBF6', '#F690C3', '#79F6A6', '#FFA864', '#B08DF6', '#F67D93', '#93FF64'],
    series: 
      data && data.length > 0 && data.map((item: any) => {
        return {
          name: item.title,
          data: item.data && item.data.length > 0 && item.data.map((item: any) => {
            return Number(item.value.toString()) || 0;
          }),
        };
      }),
    xaxis: {
      categories: data && data.length > 0 && data[0].data && data[0].data.length > 0 && data[0].data.map((item: any) => item.label),
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    grid: {
      borderColor: '#EAEAEB',
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },

      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    fill: {
      type:'solid',
      opacity: [0.35, 1],
    },

    legend: {
      position: 'bottom',
      horizontalAlign: 'center',
      floating: false,
      fontSize: '16px',
      itemMargin: {
        horizontal: 15,
        vertical: 5,
      },
      fontFamily: 'Poppins',
      fontWeight: 400,
    },

  };

  return (
    <div>
      <Chart height={300} options={chartOptions} series={chartOptions.series} type="line" />
    </div >
  );
};

export default LineChart;
