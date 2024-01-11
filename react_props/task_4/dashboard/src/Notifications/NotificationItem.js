import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  const listItem =  html ? (
      <li data-notification-type={type} dangerouslySetInnerHTML={html} data-testid="notification-item"></li>
    ) : (
      <li data-notification-type={type} data-testid="notification-item">{value}</li>
    );

  return listItem;
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
};

export default NotificationItem;
