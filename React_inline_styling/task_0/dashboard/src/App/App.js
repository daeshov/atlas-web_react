import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { getLatestNotification } from '../utils/utils';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
    };
    this.logOut = props.logOut;
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.code === 'KeyH') {
      e.preventDefault();
      alert('Logging you out');
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    let {
      isLoggedIn,
    } = this.props;

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
      <React.Fragment>
        <Notifications listNotifications={listNotifications} data-testid="menuItem"/>
        <div className="App" data-testid="app-body">
          <Header />
          {this.state.isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the School">
            <p>Some random text for the news section.</p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {},
};

export default App;
