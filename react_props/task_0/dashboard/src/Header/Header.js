import React from 'react';
import './Header.css';
import logo from '../media/holberton.jpg';

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        <h1>
        School dashboard
        </h1>
      </header>
  );
}

export default Header;
