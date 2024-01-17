import React from 'react';
import { render, screen, act, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import AppContext from '../App/AppContext';
import CourseList from '../CourseList/CourseList';

jest.mock('aphrodite');

describe("<App />", () => {
  // Existing test cases...

  it('should update state correctly when logging in', async () => {
    render(<Login />);
    act(() => {
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
      fireEvent.submit(screen.getByTestId('Login'));
    });
    await waitFor(() => {
      render(<App />);
      const appBody = screen.getByTestId('app-body');
      const user = appBody.getAttribute('data-user');
      expect(JSON.parse(user).isLoggedIn).toBe(true);
    });
  });

  it('should update state correctly when logging out', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <Login />
      </AppContext.Provider>
    );
    act(() => {
      fireEvent.click(screen.getByTestId('logout-link'));
    });
    const user = screen.getByTestId('app-body').getAttribute('data-user');
    expect(JSON.parse(user).isLoggedIn).toBe(true);
  });

  it('should mark notification as read when calling markNotificationAsRead', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );

    const initialNotifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];

    act(() => {
      screen.getByTestId('app-body').setAttribute('data-user', JSON.stringify({ isLoggedIn: true, email: 'test@example.com' }));
      screen.getByTestId('Notifications').setAttribute('data-notifications', JSON.stringify(initialNotifications));
    });

    act(() => {
      screen.getByTestId('Notifications').markNotificationAsRead(1);
    });

    const updatedNotifications = JSON.parse(screen.getByTestId('Notifications').getAttribute('data-notifications'));

    expect(updatedNotifications.some(notification => notification.id === 1)).toBe(false);
  });
});
