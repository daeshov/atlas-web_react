import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';
import App from '../App/App';


describe('Notifications Component', () => {
  it('should contain the Notifications component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('notificationsid')).toBeInTheDocument();
  });

  it('should render the correct html for the first NotificationItem', () => {
    const Notifications = [
      { id: 1, type: 'default', value: 'No new notification for now', html: { __html: 'No new notification for now' } },
      { id: 2, type: 'urgent', value: 'Test Notification 2' },
    ];

  });
});
