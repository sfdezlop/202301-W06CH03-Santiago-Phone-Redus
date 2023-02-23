import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import { Keyboard } from './keyboard';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Given a Keyboard component', () => {
  describe('When it is rendered', () => {
    test('then it should have buttons in the document', () => {
      render(
        <Provider store={store}>
          <Keyboard />
        </Provider>
      );
      const element = screen.getAllByRole('button');
      expect(element[1]).toBeInTheDocument();
    });
  });
});

describe('Given a Keyboard with key buttons', () => {
  describe('When the first button is clicked', () => {
    test('Then it should add the number 1 to the state phone property', () => {
      render(
        <Provider store={store}>
          <Keyboard />
        </Provider>
      );
      const element = screen.getAllByRole('button');
      fireEvent.click(element[0]);
      const result = store.getState().phone;
      expect(result).toBe('1');
    });
  });
});
