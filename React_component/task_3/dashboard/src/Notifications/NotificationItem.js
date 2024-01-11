import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ id, type, html, value, markAsRead }) => {
  const handleClick = () => {
    markAsRead(id);
  };

  return (
    <li data-notification-type={type} data-testid="notification-item" onClick={handleClick}>
      {html ? (
        <span dangerouslySetInnerHTML={html} />
      ) : (
        <span>{value}</span>
      )}
    </li>
  );
};

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string.isRequired,
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  html: null,
};

export default NotificationItem;
