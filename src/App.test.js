import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Message from './Message'

afterEach(cleanup);

it('renders', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('renders', () => {
  const { asFragment } = render(<Message waterToday={['plant1', 'plant2', 'plant3']} />)
  expect(asFragment()).toMatchSnapshot();
});

it('inserts array into tag <p> in Message.js', () => {
  const { getByTestId } = render(<Message waterToday={['plant1']} />);

  expect(getByTestId('plant-name')).toHaveTextContent('plant1');
});
