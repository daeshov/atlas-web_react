import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
  return (
    <header className={css(styles.header)} data-testid="Header">
      <img src={logo} className={css(styles.logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </header>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottom: '4px solid',
    color: 'red',
  },
  logo: {
    height: '40vmin',
    pointerEvents: 'none',
  },
  h1: {
    margin: 'auto auto auto 0',
    color: 'var(--holberton-red)',
  },
});

export default Header;
