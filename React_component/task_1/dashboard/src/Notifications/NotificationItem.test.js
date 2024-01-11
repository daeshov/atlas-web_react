import React from 'react';
import { render, screen } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('should render without crashing', () => {
    render(<NotificationItem type="default" value="test" />);
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
});
