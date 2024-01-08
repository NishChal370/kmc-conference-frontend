import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "@/pages-normalUser/login/feature/loginSlice";
import verifyLoginReducer from "@/protectedRoute/feature/verifyLoginSlice";

import registerUserReducer from "@/pages-normalUser/registerUser/feature/registerUserSlice";



/***ADMIN PANEL */
import adminSideNavReducer from "@/layout-adminUser/sideNav/feature/adminSideNavSlice";


import speakerReducer from "@/pages-adminUser/speakers/feature/speakerSlice";


export const store = configureStore({
      reducer: {
            registerUser: registerUserReducer,


            login: loginReducer,
            verifyLogin: verifyLoginReducer,

            adminSideNav: adminSideNavReducer,


            speaker: speakerReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
