import React from 'react';
import { screen, render } from '@testing-library/react';
import { Actions } from './actions';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Given an Actions component', () => {
  describe('When it is rendered', () => {
    test('then it should have links in the document', () => {
      render(
        <Provider store={store}>
          <Actions />
        </Provider>
      );
      const element = screen.getAllByRole('button');
      expect(element[1]).toBeInTheDocument();
    });
  });
});
