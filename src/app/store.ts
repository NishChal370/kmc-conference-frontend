import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "@/site/pages/login/feature/loginSlice";
import verifyLoginReducer from "@/protectedRoute/feature/verifyLoginSlice";

import registerUserReducer from "@/site/pages/registerUser/feature/registerUserSlice";



/***ADMIN PANEL */
import adminSideNavReducer from "@/admin/layout/sideNav/feature/adminSideNavSlice";


import dayThemeReducer from "@/admin/pages/dayTheme/feature/dayThemeSlice";
import conferenceDayReducer from "@/admin/pages/conferenceDay/feature/conferenceDaySlice";
import scheduleReducer from "@/admin/pages/schedule/feature/scheduleSlice";
import scheduleTopicReducer from "@/admin/pages/scheduleTopic/feature/scheduleTopicSlice";
import speakerReducer from "@/admin/pages/speaker/feature/speakerSlice";
import callForPaperReducer from "@/admin/pages/callForPaper/feature/callForPaperSlice";



export const store = configureStore({
      reducer: {
            registerUser: registerUserReducer,


            login: loginReducer,
            verifyLogin: verifyLoginReducer,

            adminSideNav: adminSideNavReducer,

            dayTheme: dayThemeReducer,
            conferenceDay: conferenceDayReducer,
            schedule: scheduleReducer,
            scheduleTopic: scheduleTopicReducer,
            speaker: speakerReducer,
            callForPaper: callForPaperReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
