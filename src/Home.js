import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Header-Komponente einfügen
import './Home.css';

function Home() {
  const [username, setUsername] = useState('');
  const [repoName, setRepoName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && repoName) {
      navigate(`/repo/${username}/${repoName}`);
    }
  };

  return (
    <div>
      {/* Header */}
      <Header />

      <div className="home-container">
        <h1>GitHub Repository Tracker</h1>
        <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field"
          />
          <input
            type="text"
            placeholder="Repository Name"
            value={repoName}
            onChange={(e) => setRepoName(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="fetch-button">
            Fetch Repository Data
          </button>
        </form>
      </div>
    </div>
  );
}

export default Home;
