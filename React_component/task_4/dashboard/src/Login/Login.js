import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <React.Fragment>
      <div className="login-section" data-testid="Login">
      <label htmlFor="email"> Email:</label>
        <input type="text" id="email" />

      <label htmlFor="password">Password:</label>
      <input type="password" id="password" />

        <button>OK</button>
      </div>
    </React.Fragment>
  );
}

export default Login;
