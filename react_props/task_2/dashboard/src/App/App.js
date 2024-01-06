import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="App">
        <Login />
        <Notifications />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
