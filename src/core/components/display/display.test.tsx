import React from 'react';
import { screen, render } from '@testing-library/react';
import { Display } from './display';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('Given a Display component', () => {
  describe('When it is rendered', () => {
    test('then it should have message text document', () => {
      render(
        <Provider store={store}>
          <Display />
        </Provider>
      );
      const element = screen.getByText('Status');
      expect(element).toBeInTheDocument();
    });
  });
});
