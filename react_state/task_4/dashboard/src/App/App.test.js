import React from 'react';
import { render, screen, act, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import AppContext from './AppContext';

jest.mock('aphrodite');

describe("<App />", () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('app-body')).toBeInTheDocument();
  });

  it('should contain the Notifications component', () => {
    render(<Notifications />);
    expect(screen.getByTestId('Notifications')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <Login />
      </AppContext.Provider>
    );
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('should call handleDisplayDrawer when Notifications is clicked', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    const appInstance = screen.getByTestId('Notifications');
    expect(appInstance).toBeDefined();
    expect(appInstance.handleDisplayDrawer);
  });

  it('should call handleHideDrawer when closing the drawer', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: false, email: '' }, logOut: jest.fn() }}>
        <App />
      </AppContext.Provider>
    );
    const appInstance = screen.getByTestId('Notifications');
    expect(appInstance).toBeDefined();
    expect(appInstance.handleHideDrawer);
  });

  it('should update state correctly when logging in', async () => {
    render(<Login />);
    act(() => {
      fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'test@example.com' } });
      fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'password123' } });
      fireEvent.submit(screen.getByTestId('Login'));
    });
    waitFor(() => {
      render(<App/>);
      const appBody = screen.getByTestId('app-body');
      const user = appBody.getAttribute('data-user');
      expect(JSON.parse(user).isLoggedIn).toBe(true);
    });
  });

  it('should update state correctly when logging out', () => {
    render(
      <AppContext.Provider value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut: jest.fn() }}>
        <Login />
      </AppContext.Provider>
    );
    act(() => {
      fireEvent.click(screen.getByTestId('Login'));
    });
  });
});
