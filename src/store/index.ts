import { configureStore } from "@reduxjs/toolkit";

import type { ThunkAction, Action } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  devTools: process.env.NEXT_PUBLIC_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
