import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import MyBarChart from './MyBarChart';
import MyLineChart from './MyLineChart';
import MyPieChart from './MyPieChart'; // Importiere MyPieChart
import './RepoDetails.css'; // CSS für das Layout

// Registrierung der Skalen und Komponenten von Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const RepoDetails = () => {
  const { username, repoName } = useParams();
  const [repoData, setRepoData] = useState(null);
  const [starData, setStarData] = useState([]); // Hinzufügen von Star-Daten
  const [languages, setLanguages] = useState({}); // Hinzufügen von Sprachen

  useEffect(() => {
    if (username && repoName) {
      fetch(`https://api.github.com/repos/${username}/${repoName}`)
        .then(response => response.json())
        .then(data => {
          setRepoData(data);
          return fetch(`https://api.github.com/repos/${username}/${repoName}/languages`);
        })
        .then(response => response.json())
        .then(data => {
          setLanguages(data); // Speichere die Sprachdaten
        })
        .catch(error => console.error('Fehler beim Abrufen der Daten:', error));
    }
  }, [username, repoName]);

  if (!repoData) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: ['Stars', 'Forks', 'Open Issues'],
    datasets: [
      {
        label: 'Repo Stats',
        data: [repoData.stargazers_count, repoData.forks_count, repoData.open_issues_count],
        backgroundColor: ['#007bff', '#28a745', '#dc3545'],
      },
    ],
  };

  // Verarbeitung der Sprachdaten für das Kreisdiagramm
  const languageData = {};
  for (const [language, count] of Object.entries(languages)) {
    languageData[language] = count;
  }

  return (
    <div className="repo-details">
      <h2>{repoData.full_name}</h2>
      <p>{repoData.description}</p>
      <ul className="repo-stats">
        <li><strong>⭐ Stars:</strong> {repoData.stargazers_count}</li>
        <li><strong>🍴 Forks:</strong> {repoData.forks_count}</li>
        <li><strong>🐞 Open Issues:</strong> {repoData.open_issues_count}</li>
        <li><strong>🌲 Default Branch:</strong> {repoData.default_branch}</li>
        <li><strong>🕒 Last Updated:</strong> {new Date(repoData.updated_at).toLocaleDateString()}</li>
      </ul>
      <div className="chart-container">
        <Bar data={chartData} />
      </div>
      <MyBarChart 
        stars={repoData.stargazers_count} 
        forks={repoData.forks_count} 
        openIssues={repoData.open_issues_count} 
      />
      <MyPieChart languageData={languageData} />
    </div>
  );
};

export default RepoDetails;
