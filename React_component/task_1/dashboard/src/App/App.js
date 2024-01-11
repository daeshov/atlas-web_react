import React, { Component } from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
    };
    this.logOut = props.logOut;
  }

  render() {
    return (
      <React.Fragment>
        <Notifications displayDrawer={true} notifications={[]} />
        <div className='App-body'>
          <Header />
          <Login />
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
