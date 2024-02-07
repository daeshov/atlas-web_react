import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../index';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(screen.getByText(/Copyright 2024 - Holberton School/i)).toBeInTheDocument();
  });
});
