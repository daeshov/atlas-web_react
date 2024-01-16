import React, { Component } from 'react';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import closeicon from '../assets/close-icon.png';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

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
      <div className={css(styles.root)} data-testid="menuItem" >
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

const styles = StyleSheet.create({
  root: {
    '--main-color': '#e01d3f',
  },
  notifications: {
    border: '3px dashed var(--main-color)',
    padding: '10px',
    marginBottom: '20px',
  },
  buttonImg: {
    width: '10px',
  },
  notificationsP: {
    margin: '0',
    marginTop: '15px',
  },
  defaultNotification: {
    color: 'blue',
  },
  urgentNotification: {
    color: 'red',
  },
});


Notifications.propTypes = {
  listNotifications: PropTypes.array.isRequired,
  displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;
