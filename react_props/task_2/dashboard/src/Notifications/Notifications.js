import React from 'react';
import NotificationItem from './NotificationItem';
import './Notifications.css';
import { getLatestNotification } from "../utils";
import closeicon from '../assets/close-icon.png';
import PropTypes from 'prop-types';

const Notifications = () => {
  const handleButtonClick = () => {
    console.log("close button has been clicked");
  };
  return (
    <div className="menuItem">
					<p>Your notifications</p>
          {
					displayDrawer &&
    <div className="Notifications">
      <button
        style={{
          background: "transparent",
          border: "none",
          position: "absolute",
          right: 70,
        }}
        aria-label="close"
        onClick={handleButtonClick}>

        <img src={ closeicon } alt="close-icon"/>
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem
          type="urgent"
          html={{ __html: getLatestNotification() }}
        />
      </ul>
    </div>
    }
    </div>
    
  );
};

Notifications.protoTypes = {
	displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
	displayDrawer: false,
};


export default Notifications;