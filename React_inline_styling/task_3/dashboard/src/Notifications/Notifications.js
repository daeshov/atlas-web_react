import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css } from 'aphrodite';

import closeIcon from "../assets/close-icon.png";

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
        <div className={css(styles.menuItem)} data-testid="menuItem">
          <p className={menuPStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} data-testid="Notifications">
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.notificationsButtonImage)}
              />
            </button>
            <p className={css(styles.notificationsP)}>
              Here is the list of notifications
            </p>
            <ul className={css(styles.notificationsUL)}>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
  },

  menuItemPNoShow: {
    marginRight: "8px",
    [screenSize.small]: {
      display: "none",
    },
  },

  menuItemPShow: {
    marginRight: "8px",
  },

  Notifications: {
    float: "right",
    border: `3px solid red`,
    padding: "10px",
    marginBottom: "20px",
    [screenSize.small]: {
      float: "none",
      border: "none",
      listStyle: "none",
      padding: 0,
      fontSize: "20px",
      position: "absolute",
      background: "white",
      height: "100%",
      width: "100%",
    },
  },

  NotificationsButtonImg: {
    width: "10px",
  },

  NotificationsP: {
    marginTop: '15px',
    margin: 0,
  },

  notificationsUL: {
    [screenSize.small]: {
      padding: 0,
    },
  },
});

export default Notifications;