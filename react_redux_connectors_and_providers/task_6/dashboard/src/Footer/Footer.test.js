import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright 2024 - Holberton School/i)).toBeInTheDocument();
  });
});
