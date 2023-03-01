import { ApexOptions } from 'apexcharts';
import React from 'react';

import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface DonutChartProps {
  data: any;
}

const DonutChart:React.FC<DonutChartProps> = ({data}) => {
  const chartOptions: ApexOptions = {
    chart: {
      type: 'donut',
      height: 250,
      width: 250,
      toolbar: {
        show: true,
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
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
    plotOptions: {
      radialBar: {
        offsetY: 0,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 5,
          size: '30%',
          background: 'transparent',
          image: undefined,
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            show: false,
          },
        },
        track: {
          show: true,
          startAngle: undefined,
          endAngle: undefined,
          background: '#f2f2f2',
          strokeWidth: '97%',
          opacity: 1,
          margin: 5,
        },
      },
    },
    tooltip: {
      enabled: true,
      enabledOnSeries: undefined,
      shared: false,
      followCursor: false,
      intersect: false,
      inverseOrder: false,
      custom: undefined,
      fillSeriesColor: false,
      theme: 'dark',
      style: {
        fontSize: '16px',
        fontFamily: undefined,
      },
    },
    series: data && data.length > 0 && data.map((item: any) => {
      return item.value
    }),
    labels: data && data.length > 0 && data.map((item: any) => {
      return item.label;
    }),
    dataLabels: {
      enabled: false,
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
    <Chart height={350} options={chartOptions} series={chartOptions.series} type="donut" />
  );
};

export default DonutChart;