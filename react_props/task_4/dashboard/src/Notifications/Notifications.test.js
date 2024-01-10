import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import App from '../App/App';

describe('Notifications Component', () => {
  it('should contain the Notifications component', () => {
    render(<App />);
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
  });

  it('should render the correct html for the first NotificationItem', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'No new notification for now', html: { __html: 'No new notification for now' } },
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];

    render(<Notifications displayDrawer={true} notifications={notifications} />);
    const notificationItems = screen.getAllByTestId('notification-item');
    expect(notificationItems[0].textContent).toEqual('No new notification for now');

  });
});
