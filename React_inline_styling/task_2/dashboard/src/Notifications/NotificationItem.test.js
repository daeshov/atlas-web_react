import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('should render without crashing', () => {
    render(<NotificationItem type="data-notification-type" value="test" />);
    expect(screen.getByTestId('notification-item')).toBeInTheDocument();
  });

  it('should render the correct html with type and value props', () => {
    render(<NotificationItem type="default" value="test" />);
    expect(screen.getByTestId('notification-item').getAttribute('data-notification-type')).toEqual('default');
    expect(screen.getByTestId('notification-item')).toHaveTextContent('test');
  });

  it('should render the correct html with the html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    render(<NotificationItem type="default" html={htmlProp} value="test" />);
    expect(screen.getByTestId('notification-item').getAttribute('data-notification-type')).toEqual('default');
    expect(screen.getByTestId('notification-item')).toContainHTML('<u>test</u>');
  });

  it('should call markAsRead with the right ID when simulating a click', () => {
    const spyMarkAsRead = jest.fn();
    const id = 1;

    render(<NotificationItem id={id} type="data-notification-type" value="test" markAsRead={spyMarkAsRead} />);
    fireEvent.click(screen.getByTestId('notification-item'));

    expect(spyMarkAsRead).toHaveBeenCalledWith(id);
  });
});
