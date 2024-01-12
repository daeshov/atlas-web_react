import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('should contain the Notifications component', () => {
    render(<Notifications />);
    expect(screen.getByClassName('Notifications')).toBeInTheDocument();
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

  it('should call console.log with the right message when markAsRead is called', () => {
    const spy = jest.spyOn(console, 'log');
    const notifications = [
      { id: 1, type: 'default', value: 'No new notification for now', html: { __html: 'No new notification for now' } },
    ];

    render(<Notifications displayDrawer={true} notifications={notifications} />);
    fireEvent.click(screen.getByTestId('notification-item'));

    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });
});
