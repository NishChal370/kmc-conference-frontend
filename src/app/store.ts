import { configureStore } from "@reduxjs/toolkit";

import registerUserReducer from "@/pages-normalUser/registerUser/feature/registerUserSlice";

export const store = configureStore({
      reducer: {
            registerUser: registerUserReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
