import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

describe('App Component', () => {
  it('should contain the Notifications component', () => {
    render(<Notifications displayDrawer={true} notifications={[]} />);
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<Header />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should contain the Footer component', () => {
    render(<Footer />);
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });
});
