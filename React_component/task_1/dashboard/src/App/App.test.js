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
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
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

  it('calls logOut and displays alert on ctrl+h key press', () => {
    act(() => {
      render(<App logOut={logOutMock} />, { container: document.body });
    });

    // Simulate ctrl+h key press
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    expect(logOutMock).toHaveBeenCalledTimes(1);
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');
  });
});
