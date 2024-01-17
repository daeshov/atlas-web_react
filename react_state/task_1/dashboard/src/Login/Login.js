import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: '',
      password: '',
      enableSubmit: false,
    };
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email, enableSubmit: email !== '' && this.state.password !== '' });
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password, enableSubmit: password !== '' && this.state.email !== '' });
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className={css(styles.loginBody)} data-testid="Login">
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email"> Email:</label>
          <input
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleChangeEmail}
          />

          <label htmlFor="password" className={css(styles.input)}>Password:</label>
          <input
            type="password"
            id="password"
            value={this.state.password}
            onChange={this.handleChangePassword}
          />

          <input
            type="submit"
            value="OK"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </div>
    );
  }
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
