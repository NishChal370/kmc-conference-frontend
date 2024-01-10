import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "@/site/pages/login/feature/loginSlice";
import verifyLoginReducer from "@/protectedRoute/feature/verifyLoginSlice";

import registerUserReducer from "@/site/pages/registerUser/feature/registerUserSlice";



/***ADMIN PANEL */
import adminSideNavReducer from "@/admin/layout/sideNav/feature/adminSideNavSlice";


import conferenceDayReducer from "@/admin/pages/conferenceDay/feature/conferenceDaySlice";
import speakerReducer from "@/admin/pages/speaker/feature/speakerSlice";


export const store = configureStore({
      reducer: {
            registerUser: registerUserReducer,


            login: loginReducer,
            verifyLogin: verifyLoginReducer,

            adminSideNav: adminSideNavReducer,

            conferenceDay: conferenceDayReducer,
            speaker: speakerReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
