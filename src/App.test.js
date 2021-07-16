import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders name text field', () => {
  render(<App />);
  const textFieldElement = screen.getByText(/Enter your name below:/i);
  expect(textFieldElement).toBeInTheDocument();
});
