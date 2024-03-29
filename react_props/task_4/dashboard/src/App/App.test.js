import React from 'react';
import { render, screen } from '@testing-library/react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import App from './App';


describe('App Component', () => {
  it('should render without crashing', () => {
    render(<App/>);
  });

  it('should contain the Notifications component', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('notificationsid')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<Header isLoggedIn={false} />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    const { getByTestId } = render(<Login />);
    expect(getByTestId('Login')).toBeInTheDocument();
  });

  it('should not contain the CourseList component when isLoggedIn is false', () => {
    render(<CourseList isLoggedIn={false} />);
    expect(screen.queryByTestId('courseList')).toBeNull();
  });
  

  it('should contain the CourseList component when isLoggedIn is true', () => {
    render(<CourseList isLoggedIn={true} />);
    expect(screen.getByTestId('courseList')).toBeInTheDocument();
  });


  it('should contain the Footer component', () => {
    render(<Footer isLoggedIn={false} />);
    expect(screen.getByTestId('Footer')).toBeInTheDocument();
  });
});
