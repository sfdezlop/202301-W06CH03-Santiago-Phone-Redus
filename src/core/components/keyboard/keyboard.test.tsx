import React from 'react';
import { screen, render } from '@testing-library/react';
import { Keyboard } from './keyboard';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Given a Keyboard component', () => {
  describe('When it is rendered', () => {
    test('then it should be an image in the document', () => {
      render(
        <Provider store={store}>
          <Keyboard />
        </Provider>
      );
      const element = screen.getAllByRole('button');
      const elementCount = 11;
      expect(element.length).toBe(elementCount);
    });
  });
});
