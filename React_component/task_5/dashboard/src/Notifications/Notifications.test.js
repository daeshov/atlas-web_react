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
    
    // Save the current instance of the component
    const initialComponentInstance = screen.getByClassName('Notifications');

    // Rerender with the same list of notifications
    rerender(<Notifications displayDrawer={true} notifications={notifications} />);
    
    // Check if the component instance is the same (no rerender)
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
    
    // Save the current instance of the component
    const initialComponentInstance = screen.getByClassName('Notifications');

    // Rerender with a longer list of notifications
    rerender(<Notifications displayDrawer={true} notifications={longerNotifications} />);
    
    // Check if the component instance is different (rerendered)
    expect(screen.getByClassName('Notifications')).not.toBe(initialComponentInstance);
  });
});
