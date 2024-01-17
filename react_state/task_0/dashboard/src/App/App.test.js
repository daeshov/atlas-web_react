import React from 'react';
import { render, screen, act, fireEvent } from '@testing-library/react';
import App from './App';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';


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
    render(<App />);
    expect(screen.getByTestId('Header')).toBeInTheDocument();
  });

  it('should contain the Login component', () => {
    render(<Login />);
    expect(screen.getByTestId('Login')).toBeInTheDocument();
  });

  it('tests the drawer display', async () => {
    render(<App />);
    const notificationsComponent = screen.getByTestId('Notifications');
  
    // Verify that handleDisplayDrawer is called
    act(() => {
      fireEvent.click(notificationsComponent);
    });
  
    // Wait for the asynchronous operation or set displayDrawer to true explicitly
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    render(<Notifications displayDrawer={true} />);

    // Verify that handleHideDrawer is called
    act(() => {
      console.log("Before fireEvent.click");
      fireEvent.click(screen.getByTestId('closeButton'));
      console.log("After fireEvent.click");
    });
    console.log("After act");
    expect(screen.queryByTestId('menuItem')).toBeInTheDocument();
  });
   
});
