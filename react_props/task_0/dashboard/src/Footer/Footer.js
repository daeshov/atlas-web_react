import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
  );
}

export default Footer;
