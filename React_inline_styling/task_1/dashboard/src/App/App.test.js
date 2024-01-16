import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react-dom/test-utils';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';

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
    render(<Notifications />);
    expect(screen.getByTestId('menuItem')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<Header />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('login')).toBeInTheDocument();
  });

  it('should contain the Footer component', () => {
    render(<Footer />);
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });
 
});
