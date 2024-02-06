import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';
import { StyleSheet, css } from 'aphrodite';
import AppContext from './AppContext'; 
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

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
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.code === 'KeyH') {
      e.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
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
    const { user, displayDrawer } = this.props;

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
      <AppContext.Provider value={{ user, logOut: this.logOut }} data-testid="app"> 
        <React.Fragment>
          <Notifications listNotifications={listNotifications}
            displayDrawer={displayDrawer} // Use prop instead of local state
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

App.defaultProps = {};

App.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    isLoggedIn: PropTypes.bool,
  }),
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func.isRequired,
  hideNotificationDrawer: PropTypes.func.isRequired,
};
  

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

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.isUserLoggedIn,
    displayDrawer: state.ui.isNotificationDrawerVisible,
  };
}

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);