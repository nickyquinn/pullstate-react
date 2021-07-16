import { render, screen } from '@testing-library/react';
import Name from './NameComponent';
import React from 'react';

test('renders name text field', () => {
  render(<Name name={"Nick"} />);
  const textFieldElement = screen.getByText(/Hello, Nick!/i);
  expect(textFieldElement).toBeInTheDocument();
});
