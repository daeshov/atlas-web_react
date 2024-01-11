import React from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: props.isLoggedIn || false,
    }
    this.logOut = props.logOut;
  }

  handleKeyDown(e) {
    if (e.ctrlKey && e.code == "KeyH") {
      e.preventDefault()
      alert("Logging you out");
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  render() {
    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}/>
        <div className="App">
          <Header />
          { this.state.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login /> }
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return
  }
}

export default App;