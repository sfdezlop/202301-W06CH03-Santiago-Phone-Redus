import { createReducer } from '@reduxjs/toolkit';
import * as ac from './phone.actions.creator';

const initialState: string = '';

export const phoneReducer = createReducer(initialState, (builder) => {
  builder.addCase(ac.clickCreator, (state, { payload }) => state + payload);
  builder.addCase(ac.deleteCreator, (state) => '');
  builder.addCase(ac.stopCreator, (state) => state);
  builder.addDefaultCase((state) => state);
});
//default es imprescindible ya que cuando hay más de 1 reducer todos intentan ejecutarlas
