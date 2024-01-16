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
const styles = StyleSheet.create({
  loginBody: {
    padding: '36px 24px',
  },
  input: {
    margin: '0 16px 0 8px',
  },
});

export default Login;
