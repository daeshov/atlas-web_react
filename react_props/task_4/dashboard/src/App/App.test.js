import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

describe('App Component', () => {
  it('should contain the Notifications component with displayDrawer true', () => {
    render(<Notifications isLoggedIn={false} />);
    expect(screen.getByTestId('notifications')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<Header isLoggedIn={false} />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component when isLoggedIn is false', () => {
    render(<Login isLoggedIn={false} />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should not contain the CourseList component when isLoggedIn is false', () => {
    render(<CourseList isLoggedIn={false} />);
    expect(screen.queryByTestId('course-list-component')).not.toBeInTheDocument();
  });

  it('should contain the CourseList component when isLoggedIn is true', () => {
    render(<CourseList isLoggedIn={true} />);
    expect(screen.getByTestId('course-list-component')).toBeInTheDocument();
  });

  it('should not contain the Login component when isLoggedIn is true', () => {
    render(<Login isLoggedIn={true} />);
    expect(screen.queryByTestId('Login')).not.toBeInTheDocument();
  });

  it('should contain the Footer component', () => {
    render(<Footer isLoggedIn={false} />);
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });
});
