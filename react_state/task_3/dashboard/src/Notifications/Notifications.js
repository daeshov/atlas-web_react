import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import NotificationItem from "./NotificationItem";
import NotificationItemShape from "./NotificationItemShape";
import { StyleSheet, css, keyframes } from 'aphrodite';

import closeIcon from "../assets/close-icon.png";

class Notifications extends PureComponent {
  handleYourNotificationsClick = () => {
    const { handleDisplayDrawer } = this.props;
    if (handleDisplayDrawer) {
      handleDisplayDrawer();
    }
  };

  handleHideButtonClick = () => {
    const { handleHideDrawer } = this.props;
    if (handleHideDrawer) {
      handleHideDrawer();
    }
  };

  markNotificationAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  };

  exposeFunctions = () => ({
    handleDisplayDrawer: this.handleYourNotificationsClick,
    handleHideDrawer: this.handleHideButtonClick,
  });

  render() {
    const { displayDrawer, listNotifications } = this.props;

    const menuPStyle = css(
      displayDrawer ? styles.menuItemPNoShow : styles.menuItemPShow
    );

    return (
      <>
        <div
          className={css(styles.Notifications)}
          data-testid="Notifications"
          onClick={this.handleYourNotificationsClick}
        >
          <p className={menuPStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.menuItem)} data-testid="menuItem">
            <button
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                right: 20,
              }}
              aria-label="close"
              onClick={this.handleHideButtonClick}
              data-testid="closeButton"
            >
              <img
                src={closeIcon}
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
                  markNotificationAsRead={this.markNotificationAsRead}
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
  handleDisplayDrawer: null,
  handleHideDrawer: null,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const fadeIn = {
  '0%': { opacity: 0.5 },
  '100%': { opacity: 1 },
};

const bounce = {
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-5px)' },
  '75%': { transform: 'translateY(5px)' },
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: "right",
    float: "right",
    backgroundColor: "#fff8f8",
    ':hover': {
      cursor: 'pointer',
      animation: `${fadeIn} 1s, ${bounce} 0.5s 3`,
    },
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

  notifications: {
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

  notificationsButtonImage: {
    width: "10px",
  },

  notificationsP: {
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
