import React from 'react';
import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import Login from './Login';

jest.mock('aphrodite');

describe('Login Component', () => {
  it('should render without crashing', () => {
    render(<Login logIn={() => {}} />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should render 2 input tags and 2 label tags', () => {
    render(<Login logIn={() => {}} />);
    expect(screen.getAllByRole('textbox').length).toBe(1);
    expect(screen.getAllByRole('textbox')[0]).toHaveAttribute('id', 'email');
    expect(screen.getAllByLabelText(/password/i).length).toBe(1);
    expect(screen.getAllByLabelText(/password/i)[0]).toHaveAttribute('id', 'password');
  });

  it('should have a submit button enabled by default', () => {
    render(<Login logIn={() => {}} />);
    const submitButton = screen.getByTestId('login-btn');
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).not.toBeDisabled(); // Use toBeDisabled matcher
  });

  it('should disable submit button after changing email and password inputs', async () => {
    render(<Login logIn={() => {}} />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });

    await waitFor(() => {
      const submitButton = screen.getByTestId('login-btn');
      expect(submitButton).toBeInTheDocument();
    });
  });
});
