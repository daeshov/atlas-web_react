import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
  return (
    <React.Fragment>
      <div className={css(styles.loginBody)} data-testid="login">
      <label htmlFor="email"> Email:</label>
        <input type="text" id="email" />

      <label htmlFor="password" className={css(styles.input)}>Password:</label>
      <input type="password" id="password" />

        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  loginBody: {
    padding: '36px 24px',
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
  input: {
    margin: '0 16px 0 8px',
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
