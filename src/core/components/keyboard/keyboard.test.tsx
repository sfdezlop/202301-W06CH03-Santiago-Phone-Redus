import React from 'react';
import { screen, render } from '@testing-library/react';
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
