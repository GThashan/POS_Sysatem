import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart: React.FC = () => {
  const data = {
    labels: ['Customer Orders', 'Income', 'Products'],
    datasets: [
      {
        label: 'System Metrics',
        data: [300, 500, 200], 
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)', 
          'rgba(54, 162, 235, 0.2)', 
          'rgba(255, 206, 86, 0.2)', 
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Customer Orders, Income, and Products Overview',
      },
    },
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">System Metrics</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
