import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders under construction message', () => {
  const { getByText } = render(<App />);
  expect(
    getByText(/This site is currently under construction/i)
  ).toBeInTheDocument();
});
