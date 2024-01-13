import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('should not rerender with the same list of notifications', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'No new notification for now', html: { __html: 'No new notification for now' } },
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];

    const { rerender } = render(<Notifications displayDrawer={true} notifications={notifications} />);
    
    const initialComponentInstance = screen.getByClassName('Notifications');

    rerender(<Notifications displayDrawer={true} notifications={notifications} />);
    
    expect(screen.getByClassName('Notifications')).toBe(initialComponentInstance);
  });

  it('should rerender with a longer list of notifications', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'No new notification for now', html: { __html: 'No new notification for now' } },
    ];

    const longerNotifications = [
      ...initialNotifications,
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];

    const { rerender } = render(<Notifications displayDrawer={true} notifications={initialNotifications} />);
    
    const initialComponentInstance = screen.getByClassName('Notifications');

    rerender(<Notifications displayDrawer={true} notifications={longerNotifications} />);
    
    expect(screen.getByClassName('Notifications')).not.toBe(initialComponentInstance);
  });
});
