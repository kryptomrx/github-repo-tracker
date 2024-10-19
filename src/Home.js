import React, { useState } from 'react';
import './Home.css';  // Importiere dein CSS für die Startseite

const Home = () => {
  const [username, setUsername] = useState('');
  const [repoName, setRepoName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && repoName) {
      console.log(`Fetching data for ${username}/${repoName}`);
      // Hier würde die Navigation zur Repo-Seite erfolgen
    }
  };

  return (
    <div className="home-container">
      <h1>GitHub Repository Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="GitHub Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Repository Name"
          value={repoName}
          onChange={(e) => setRepoName(e.target.value)}
        />
        <button type="submit">Fetch Repository Data</button>
      </form>
    </div>
  );
};

export default Home;
