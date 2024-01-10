import React, { Component, Fragment } from "react";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

class Notifications extends Component {
  removeStrongTag(notificationValue) {
    return notificationValue.replace(/<strong>/g, "").replace(/<\/strong>/g, "");
  }

  render() {
    const { displayDrawer } = this.props;

    return (
      <Fragment>
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
              <NotificationItem type="default" value="New course available" />
              <NotificationItem type="urgent" value="New resume available" />
              <NotificationItem
                type="urgent"
                value={this.removeStrongTag(getLatestNotification())}
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
      </Fragment>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
