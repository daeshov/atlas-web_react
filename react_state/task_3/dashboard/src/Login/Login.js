import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = ({ logIn }) => {
  // Remove the isLoggedIn property from the state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Modify handleLoginSubmit to call logIn function
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    logIn(email, password);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <React.Fragment>
      <div className={css(styles.loginBody)} data-testid="Login">
        <form onSubmit={handleLoginSubmit}>
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleChangeEmail}
          />

          <label htmlFor="password" className={css(styles.input)}>
            Password:
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />

          <button type="submit" data-testid="login-btn">OK</button>
        </form>
      </div>
    </React.Fragment>
  );
};

const screenSize = {
  small: '@media screen and (max-width: 900px)',
};

const styles = StyleSheet.create({
  loginBody: {
    padding: '36px 24px',
    [screenSize.small]: {
      display: 'block',
      marginLeft: 0,
      marginTop: '10px',
      marginBottom: '10px',
    },
  },
  input: {
    margin: '0 16px 0 8px',
    [screenSize.small]: {
      display: 'block',
      marginLeft: 0,
      marginTop: '10px',
      marginBottom: '10px',
    },
  },
});

export default Login;
