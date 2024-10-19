import React from 'react';
import { Line } from 'react-chartjs-2';

const MyLineChart = ({ stars, forks, openIssues }) => {
  // Überprüfe, ob die Props existieren
  if (stars === undefined || forks === undefined || openIssues === undefined) {
    return <div>No data available</div>; // Oder ein Ladezustand
  }

  const data = {
    labels: ['Stars', 'Forks', 'Open Issues'],
    datasets: [
      {
        label: 'Repository Stats',
        data: [stars, forks, openIssues],
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  return <Line data={data} />;
};

export default MyLineChart;
