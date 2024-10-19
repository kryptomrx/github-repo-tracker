import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>GitHub Repository Tracker</h1>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/" className="nav-link">
              🏠 Home
            </Link>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
              🔗 Visit GitHub
            </a>
          </li>
          <li>
            <div className="dropdown">
              <button className="dropbtn">
                ⚙️ More Options
              </button>
              <div className="dropdown-content">
                <Link to="/settings" className="dropdown-item">
                  🛠️ Settings
                </Link>
                <Link to="/features" className="dropdown-item">
                  🍵 GitHub Features
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
