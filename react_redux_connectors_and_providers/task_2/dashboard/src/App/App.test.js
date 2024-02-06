import React from 'react';
import { render, screen, act, fireEvent, waitFor} from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import AppContext from './AppContext';
import { Provider } from "react-redux";
import uiReducer, { initialState } from "../reducers/uiReducer";
import { legacy_createStore as createStore} from 'redux';

jest.mock('aphrodite');

const store = createStore(uiReducer, initialState);

describe("<App />", () => {

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByTestId('app-body')).toBeInTheDocument();
  });

  it('should contain the Notifications component', () => {
    render(<Notifications />);
    expect(screen.getByTestId('Notifications')).toBeInTheDocument();
  });

  it('should contain the Header component', () => {
    render(<Header />);
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
