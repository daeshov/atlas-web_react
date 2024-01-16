import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';

jest.mock('aphrodite');

describe("<App />", () => {
  
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-body')).toBeInTheDocument();
  });

  it('should contain the Notifications component', () => {
    render(<App />);
    expect(screen.getByTestId('menuItem')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<App />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should contain the Footer component', () => {
    render(<App />);
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });
 
  it('tests the drawer display', () => {
    render(<App />);
    const instance = screen.getByTestId('app-body').instance;

    // Verify that handleDisplayDrawer is called
    act(() => {
      instance.handleDisplayDrawer();
    });
    expect(instance.state.displayDrawer).toBe(true);

    // Verify that handleHideDrawer is called
    act(() => {
      instance.handleHideDrawer();
    });
    expect(instance.state.displayDrawer).toBe(false);
  });
});
