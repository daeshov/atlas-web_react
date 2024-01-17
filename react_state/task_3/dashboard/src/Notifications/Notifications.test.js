import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

jest.mock('aphrodite');

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

  it('should call handleYourNotificationsClick when clicking on the menu item', () => {
    const handleDisplayDrawerMock = jest.fn();
    render(<Notifications displayDrawer={true} handleDisplayDrawer={handleDisplayDrawerMock} />);
    
    fireEvent.click(screen.getByTestId('Notifications'));

    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('should call handleHideButtonClick when clicking on the button', () => {
    const handleHideDrawerMock = jest.fn();
    render(<Notifications displayDrawer={true} handleHideDrawer={handleHideDrawerMock} />);
    
    fireEvent.click(screen.getByLabelText('close'));

    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
