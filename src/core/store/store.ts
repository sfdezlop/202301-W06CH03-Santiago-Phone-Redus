import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { phoneReducer } from '../reducer/phone.reducer';

export const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

//reducer: cada una de las patas o ramas del estado, podemos dar de alta tantas como queramos y asociar un reducer a cada uno

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
