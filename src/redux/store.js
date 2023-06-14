import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './redusers';

export const store = configureStore({
    reducer: reducer,
  });
