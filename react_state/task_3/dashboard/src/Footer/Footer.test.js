import React from 'react';
import { render, screen } from '@testing-library/react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Footer from './Footer';
import AppContext from '../App/AppContext';

jest.mock('../utils/utils', () => ({
  getFooterCopy: jest.fn((isTrue) => (isTrue ? 'Holberton School' : 'Holberton School Main Building')),
  getFullYear: jest.fn(() => 2024),
}));

describe('Footer Component', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright 2024 - Holberton School/i)).toBeInTheDocument();
  });

  it('should not display link when user is logged out within the context', () => {
    const contextValue = { user: { isLoggedIn: false } };

    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    expect(screen.queryByText(/Contact us/i)).not.toBeInTheDocument();
  });

  it('should display link when user is logged in within the context', () => {
    const contextValue = { user: { isLoggedIn: true } };

    render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );

    expect(screen.getByText(/Contact us/i)).toBeInTheDocument();
  });
});
