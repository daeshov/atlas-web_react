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
});
