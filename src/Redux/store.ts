import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./Features/Count-slice";
import { apiSlice } from "./Features/api/apiSlice";

export const store = configureStore({
  reducer: {
    countSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
