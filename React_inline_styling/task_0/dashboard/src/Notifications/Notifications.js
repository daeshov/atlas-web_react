import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import closeicon from '../assets/close-icon.png';
import PropTypes from 'prop-types';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
    this.state = {
      displayDrawer: false,
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listNotifications.length > this.props.listNotifications.length;
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
      <div className="menuItem" data-testid="menuItem" >
        <p>Your notifications</p>
        {displayDrawer && (
          <div className="Notifications" data-testid="Notifications" >
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
              {this.props.listNotifications.map((notification, index) => (
                <NotificationItem
                  key={index}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={() => this.markAsRead(index + 1)}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
