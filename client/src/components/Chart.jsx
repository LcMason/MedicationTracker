import React, { useState, useEffect } from 'react';
import { PieChart } from 'react-chartjs-2';
import Data from './utils/Data';

const Chart = () => {
  const [chartData, setChartData] = useState(null);

  const formatChartData = (data) => ({
    labels: data.map(data => data.year),
    datasets: [
      {
        label: 'Excellent',
        data: data.map(data => data.excellent),
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
      {
        label: 'Good',
        data: data.map(data => data.good),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Neutral',
        data: data.map(data => data.neutral),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    const formattedData = formatChartData(Data);
    setChartData(formattedData);
  }, []);

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      {chartData && <PieChart data={chartData} options={chartOptions} />}
    </div>
  );
};

export default Chart;


