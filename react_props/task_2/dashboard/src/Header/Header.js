import React from 'react';
import './Header.test';
import holberton from '../media/image_mock';

const Header = () => {
  return (
    <header className="App-header">
        <img src={holberton} className="App-logo" alt="logo" />
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
