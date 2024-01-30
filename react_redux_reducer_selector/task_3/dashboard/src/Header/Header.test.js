import React from 'react';
import { describe, test, expect, jest } from '@jest/globals';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import AppContext from '../App/AppContext';

jest.mock('aphrodite');

describe('Header Component', () => {
  test('should render without crashing', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
  });

  test('should render img and h1 tags', () => {
    render(<Header />);
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
  });

  test('should not create logoutSection with default context value', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.queryByTestId('logoutSection')).toBeNull();
  });

  test('should create logoutSection with user defined context value', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(screen.getByTestId('logoutSection')).toBeInTheDocument();
  });

  test('should call logOut function when clicking on logout link', () => {
    const logOutSpy = jest.fn();
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: logOutSpy }}>
        <Header />
      </AppContext.Provider>
    );
    const logoutLink = screen.getByTestId('logoutSection');
    fireEvent.click(logoutLink);
  });
});
