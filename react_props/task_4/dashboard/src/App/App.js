import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from "../CourseList/CourseList";

function App({ isLoggedIn }) {
  const [displayDrawer, setDisplayDrawer] = useState(true);

  return (
    <React.Fragment>
      <Notifications displayDrawer={displayDrawer} data-testid="notificationsid" />
      <div className='App-body'>
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false
}
export default App;
