import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Notifications Component', () => {
  it('should rerender with a longer list of notifications', () => {
    const initialNotifications = [
      { id: 1, type: 'default', value: 'No new notification for now', html: { __html: 'No new notification for now' } },
    ];
  
    const longerNotifications = [
      ...initialNotifications,
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];
  
    const { rerender } = render(<Notifications displayDrawer={true} listNotifications={initialNotifications} />);
    
    const initialComponentInstance = screen.getByTestId('menuItem');
  
    rerender(<Notifications displayDrawer={true} listNotifications={longerNotifications} />);
    
    expect(screen.getByTestId('menuItem')).toBe(initialComponentInstance);
  });
  
});
