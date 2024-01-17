import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    isLoggedIn: false,
  });

  const [displayDrawer, setDisplayDrawer] = useState(false);

  const handleDisplayDrawer = () => {
    setDisplayDrawer(true);
  };

  const handleHideDrawer = () => {
    setDisplayDrawer(false);
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.code === 'KeyH') {
      e.preventDefault();
      alert('Logging you out');
      logOut();
    }
  };

  const logIn = (email, password) => {
    setUser({
      email,
      password,
      isLoggedIn: true,
    });
  };

  const logOut = () => {
    setUser({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  };

  const markNotificationAsRead = (id) => {
    // Remove the notification with the given id from the list
    setListNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  let i = 0;

  let [listNotifications, setListNotifications] = useState([
    {
      id: i++,
      type: 'default',
      value: 'New course available',
    },
    {
      id: i++,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: i++,
      type: 'urgent',
      html: { __html: getLatestNotification() },
    },
  ]);

  let listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: 60,
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20,
    },
    {
      id: 3,
      name: 'React',
      credit: 40,
    },
  ];

  return (
    <AppContext.Provider value={{ user, logOut, markNotificationAsRead }}>
      <React.Fragment>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={handleDisplayDrawer}
          handleHideDrawer={handleHideDrawer}
          data-testid="Notifications"
        />
        <div className="App" data-testid="app-body">
          <Header />
          {!user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} data-testid="logout-link" />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={logIn} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School" className={css(styles.body)}>
            <p>Some random text for the news section.</p>
          </BodySection>
          <Footer className={css(styles.footer)} />
        </div>
      </React.Fragment>
    </AppContext.Provider>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#f0f0f0',
    fontFamily: 'Arial, sans-serif',
  },
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
  },
});

export default App;
