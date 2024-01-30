import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from 'aphrodite';
import { PureComponent } from 'react';

class NotificationItem extends PureComponent {
  render() {
    const { id, type, html, value, markAsRead } = this.props;

  return html === undefined? ( 
      <li data-notification-type={type} data-testid="notification-item" onClick={() => markAsRead(id) } className={css(styles[type])}>
      {value}
      </li>
    ) : (
      <li data-notification-type={type} data-testid="notification-item" dangerouslySetInnerHTML={html} className={css(styles[type])}></li>
    );
  }
}

NotificationItem.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  value: '',
  markAsRead: () => {}
};

const screenSize = {
  small: "@media screen and (max-width: 900px)",
}

const smallListItem = {
  listStyle: "none",
  borderBottom: "1px solid black",
  padding: "10px 8px",
  fontSize: "20px",
};

const styles = StyleSheet.create({
  default: {
    color: 'blue',
    [screenSize.small]: smallListItem,

  },
  urgent: {
    color: 'red',
    [screenSize.small]: smallListItem,
  }
});

export default NotificationItem;