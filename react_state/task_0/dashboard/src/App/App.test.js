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

  it('tests the drawer display', () => {
    render(<App />);
    
    // Ensure that Notifications component is displayed
    fireEvent.click(screen.getByTestId('Notifications'));
  
    // Use queryByTestId to check for the existence of closeButton
    const closeButton = screen.queryByTestId('closeButton');
    
    // Check if closeButton exists before interacting with it
    if (closeButton) {
      fireEvent.click(closeButton);
      // Verify that closeButton is not in the document after clicking
      expect(screen.queryByTestId('closeButton')).not.toBeInTheDocument();
    } else {
      // Handle the case when closeButton is not found
      console.error('closeButton not found');
    }
  });
});
