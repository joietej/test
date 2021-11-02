import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders select files button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Select Files/i);
  expect(buttonElement).toBeInTheDocument();
});
