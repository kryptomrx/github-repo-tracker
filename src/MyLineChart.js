import React from 'react';
import { Line } from 'react-chartjs-2';

const MyLineChart = ({ starData }) => {
  const data = {
    labels: starData.labels, // Die Labels für die X-Achse
    datasets: [
      {
        label: 'Stars über die Zeit',
        data: starData.counts, // Die Daten für die Y-Achse
        fill: false,
        borderColor: 'cyan',
        tension: 0.1, // Für eine sanfte Kurve
      },
    ],
  };

  return (
    <div>
      <h3>Stars über die Zeit</h3>
      <Line data={data} />
    </div>
  );
};

export default MyLineChart;
