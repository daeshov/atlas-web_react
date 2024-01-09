import React from 'react';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, notifications }) => {
  return (
    <div className="Notifications" data-testid="notifications">
      <button onClick={() => console.log('Close button has been clicked')}></button>
      <ul>
        {displayDrawer && (!notifications || notifications.length === 0) && (
          <NotificationItem type="default" value="No new notification for now" />
        )}
        {Array.isArray(notifications) && notifications.map((notification) => (
          <NotificationItem
            key={notification.id}
            type={notification.type}
            value={notification.value}
            html={notification.html}
          />
        ))}
      </ul>
    </div>
  );
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  notifications: PropTypes.array.isRequired, // Make sure to provide this prop
};

export default Notifications;
