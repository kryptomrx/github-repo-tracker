import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrierung der Komponenten von Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const MyPieChart = ({ languageData }) => {
  const data = {
    labels: Object.keys(languageData),
    datasets: [
      {
        label: 'Programmiersprachen',
        data: Object.values(languageData),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
        ],
      },
    ],
  };

  return (
    <div style={{ width: '400px', height: '400px' }}>
      <Pie data={data} />
    </div>
  );
};

export default MyPieChart;
