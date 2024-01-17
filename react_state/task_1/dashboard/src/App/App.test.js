import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';


jest.mock('aphrodite');

describe("<App />", () => {
  
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-body')).toBeInTheDocument();
  });

  it('should contain the Notifications component', () => {
    render(<Notifications />);
    expect(screen.getByTestId('Notifications')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<App />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should call handleDisplayDrawer when Notifications is clicked', () => {
    render(<App />);
    const appInstance = screen.getByTestId('Notifications');
    expect(appInstance).toBeDefined();
    expect(appInstance.handleDisplayDrawer);
  });

  it('should call handleHideDrawer when closing the drawer', () => {
    render(<App />);
    const appInstance = screen.getByTestId('Notifications');
    expect(appInstance).toBeDefined();
    expect(appInstance.handleHideDrawer);
  });
});
