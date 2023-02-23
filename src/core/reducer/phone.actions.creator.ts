import { createAction } from '@reduxjs/toolkit';

import { phoneActions } from './phone.actions.type';

export const clickCreator = createAction<string>(phoneActions.click);

export const deleteCreator = createAction(phoneActions.delete);
