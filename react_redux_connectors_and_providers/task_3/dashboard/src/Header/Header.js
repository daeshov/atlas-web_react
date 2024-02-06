import React from 'react';
import { connect } from 'react-redux';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import { logOut } from '../actions/uiActionCreators';

class Header extends React.Component {
  render() {
    const { user, logOut } = this.props;
    const isLoggedIn = user.isLoggedIn;

    return (
      <header className={css(styles.header)} data-testid="Header">
        <img src={logo} className={css(styles.logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>

        {isLoggedIn && (
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
    marginLeft: 'auto',
    color: 'black',
    cursor: 'pointer',
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.ui.user,
  };
};

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
