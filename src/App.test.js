import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import Message from './Message'

afterEach(cleanup);

it('App renders', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});

it('Message renders', () => {
  const { asFragment } = render(<Message waterToday={['plant1', 'plant2', 'plant3']} date={'Mon Dec 16 2019 17:52:11 GMT-0600 (Central Standard Time)'} />)
  expect(asFragment()).toMatchSnapshot();
});

it('inserts array into tag <li> in Message.js', () => {
  const { getByTestId } = render(<Message waterToday={['plant1']} date={'Mon Dec 16 2019 17:52:11 GMT-0600 (Central Standard Time)'} />);

  expect(getByTestId('plant-name')).toHaveTextContent('plant1');
});
