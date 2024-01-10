import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
  return (
    <li data-notification-type={type} data-testid="notification-item">
      {html ? (
        <span dangerouslySetInnerHTML={html} />
      ) : (
        <span>{value}</span>
      )}
    </li>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string.isRequired,
};

NotificationItem.defaultProps = {
  html: null,
};

export default NotificationItem;
