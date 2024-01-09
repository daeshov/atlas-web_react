import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
    <Notifications displayDrawer={true} notifications={[]} />
    <div className='App'>
      <Header />
      <Login />
      <Footer />
    </div>
    </React.Fragment>
  );
}

export default App;