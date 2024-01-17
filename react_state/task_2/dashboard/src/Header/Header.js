import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

class Header extends React.Component {
  static contextType = AppContext; 

  render() {
    const { user, logOut } = this.context; 
    const isLoggedIn = user.isLoggedIn;

    return (
      <header className={css(styles.header)} data-testid="Header">
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>

        {isLoggedIn && ( // Display only when isLoggedIn is true
          <p className={css(styles.logoutSection)} data-testid="logoutSection">
            Welcome {user.email} (<span onClick={logOut}>logout</span>)
          </p>
        )}
      </header>
    );
  }
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
  logoutSection: {
    marginLeft: 'auto', // Align to the right
    color: 'black', // Adjust the color as needed
    cursor: 'pointer',
  },
});

export default Header;
