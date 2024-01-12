import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import { getLatestNotification } from '../utils';
import closeicon from '../assets/close-icon.png';
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false,
    };
  }

  handleButtonClick = () => {
    console.log('close button has been clicked');
  };

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  render() {
    const { displayDrawer } = this.state;

    return (
      <div className="menuItem">
        <p>Your notifications</p>
        {displayDrawer && (
          <div className="Notifications">
            <button
              style={{
                background: 'transparent',
                border: 'none',
                position: 'absolute',
                right: 70,
              }}
              aria-label="close"
              onClick={this.handleButtonClick}
            >
              <img src={closeicon} alt="close-icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem
                type="default"
                value="New course available"
                markAsRead={() => this.markAsRead(1)}
              />
              <NotificationItem
                type="urgent"
                value="New resume available"
                markAsRead={() => this.markAsRead(2)}
              />
              <NotificationItem
                type="urgent"
                html={{ __html: getLatestNotification() }}
                markAsRead={() => this.markAsRead(3)}
              />
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
