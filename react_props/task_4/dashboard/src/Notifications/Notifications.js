import React from 'react';
import './Notifications.css';
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

export function Notifications({ displayDrawer }) {
  return (
    <>
      <div className="menuItem" data-testid="menuitemid">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications" data-testid="notificationsid">
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
          <button
            style={{
              background: "transparent",
              border: "none",
              position: "absolute",
              right: "1rem",
              top: "0.5rem",
              width: "0rem",
            }}
          >
            <img src={closeIcon} alt="closeIcon" className="closeIcon" />
          </button>
        </div>
      )}
      </>
  );
}

Notifications.defaultProps = {
  displayDrawer: true,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;