import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class NotificationItem extends PureComponent {
  handleClick = () => {
    const { id, markAsRead } = this.props;
    markAsRead(id);
  };

  render() {
    const { type, html, value } = this.props;

    return (
      <li data-notification-type={type} data-testid="notification-item" onClick={this.handleClick}>
        {html ? (
          <span dangerouslySetInnerHTML={html} />
        ) : (
          <span>{value}</span>
        )}
      </li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  html: null,
};

export default NotificationItem;
