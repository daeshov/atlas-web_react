import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';

// Mocking the alert function
const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

describe('App Component', () => {
  // Mock logOut function
  const logOutMock = jest.fn();

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
    render(<App />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should contain the Footer component', () => {
    render(<App />);
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });
 
});
