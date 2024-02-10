// Import necessary libraries
import React from 'react';
import { Pie } from 'react-chartjs-2';
import Data from './utils/Data';  // # TODO cannot find path


// import Data from '../utils/Data';




const Chart = () => {
// Function to format the data for Chart.js
const formatChartData = (data) => ({
  labels: data.map(entry => entry.year),
  datasets: [
    {
      label: 'Excellent',
      data: data.map(entry => entry.excellent),
      backgroundColor: 'rgba(75,192,192,0.2)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
    },
    {
      label: 'Good',
      data: data.map(entry => entry.good),
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      borderColor: 'rgba(255, 206, 86, 1)',
      borderWidth: 1,
    },
    {
      label: 'Neutral',
      data: data.map(entry => entry.neutral),
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
    },
  ],
});

// Chart component
// const Chart = () => {
  // Format the data for Chart.js
  const chartData = formatChartData(Data);

  // Chart options (customize as needed)
  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default Chart;

