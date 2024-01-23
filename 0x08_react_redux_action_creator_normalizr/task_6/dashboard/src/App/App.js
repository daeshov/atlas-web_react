import React from 'react';
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      displayDrawer: false,
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.code === 'KeyH') {
      e.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut = () => {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const { user, displayDrawer } = this.state;

    let i = 0;
    
    let listNotifications = [
      {
        id: i++,
        type: "default",
        value: "New course available",
      },
      {
        id: i++,
        type: "urgent",
        value: "New resume available",
      },
      {
        id: i++,
        type: "urgent",
        html: {__html: getLatestNotification()},
      }
    ];

    let listCourses = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    return (
    <AppContext.Provider value={{ user, logOut: this.logOut }}> 
      <React.Fragment>
        <Notifications listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          data-testid="Notifications"/>
        <div className="App" data-testid="app-body">
          <Header />
          {!user.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list" >
              <CourseList listCourses={listCourses} data-testid="logout-link"/>
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={this.logIn} />
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
