import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';
import { StyleSheetTestUtils } from 'aphrodite';

StyleSheetTestUtils.suppressStyleInjection();

describe('Login Component', () => {
  it('should render without crashing', () => {
    render(<Login />);
    expect(screen).toBeTruthy();
  });

  it('should render 2 input tags and 2 label tags', () => {
    render(<Login />);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
});