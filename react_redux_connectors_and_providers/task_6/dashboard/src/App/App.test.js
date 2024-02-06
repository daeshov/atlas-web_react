import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import { Provider } from 'react-redux';
import { legacy_createStore as createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

jest.mock('aphrodite');

const store = createStore(rootReducer);

describe('<App />', () => {
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

  it('should map state to props correctly', () => {
    const initialState = store.getState();
    const props = mapStateToProps(initialState);
    
    expect(props.someProperty).toBe(initialState.someReducer.someProperty);
  });
});
