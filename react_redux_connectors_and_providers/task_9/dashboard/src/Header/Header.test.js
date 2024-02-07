import React from 'react';
import { describe, test, expect, jest } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import store from '../index';
import { Provider } from 'react-redux';


jest.mock('aphrodite');

describe('Header Component', () => {
  test('should render without crashing', () => {
    render(
      <Provider store={store}>
         <Header />
      </Provider>);
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
  });

  test('should render img and h1 tags', () => {
    render(
      <Provider store={store}>
         <Header />
      </Provider>);
    expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /school dashboard/i })).toBeInTheDocument();
  });
});
