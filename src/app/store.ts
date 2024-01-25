import { configureStore } from "@reduxjs/toolkit";

import loginReducer from "@/site/pages/login/feature/loginSlice";
import verifyLoginReducer from "@/protectedRoute/feature/verifyLoginSlice";
import forgotPasswordReducer from "@/site/pages/forgotPassword/feature/forgotPasswordSlice";
import resetPasswordReducer from "@/site/pages/resetPassword/feature/resetPasswordSlice";
import verifyEmailReducer from "@/site/pages/verifyEmail/feature/verifyEmailSlice";

import registerUserReducer from "@/site/pages/registerUser/feature/registerUserSlice";



/***ADMIN PANEL */
import adminSideNavReducer from "@/admin/layout/sideNav/feature/adminSideNavSlice";


import dayThemeReducer from "@/admin/pages/dayTheme/feature/dayThemeSlice";
import conferenceDayReducer from "@/admin/pages/conferenceDay/feature/conferenceDaySlice";
import scheduleReducer from "@/admin/pages/schedule/feature/scheduleSlice";
import scheduleTopicReducer from "@/admin/pages/scheduleTopic/feature/scheduleTopicSlice";
import speakerReducer from "@/admin/pages/speaker/feature/speakerSlice";
import speakerScheduleReducer from "@/admin/pages/speakerSchedule/feature/speakerScheduleSlice";
import callForPaperReducer from "@/admin/pages/callForPaper/feature/callForPaperSlice";
import participantReducer from "@/admin/pages/participant/feature/participantSlice";
import userReducer from "@/admin/pages/user/feature/userSlice";
import adminProfileReducer from "@/admin/pages/profileSetting/profile/feature/profileSlice";
import appliedHistoryReducer from "@/admin/pages/profileSetting/appliedHistory/feature/appliedHistorySlice";

export const store = configureStore({
      reducer: {
            registerUser: registerUserReducer,
            forgotPassword: forgotPasswordReducer,
            resetPassword: resetPasswordReducer,

            login: loginReducer,
            verifyLogin: verifyLoginReducer,
            verifyEmail: verifyEmailReducer,

            adminSideNav: adminSideNavReducer,

            dayTheme: dayThemeReducer,
            conferenceDay: conferenceDayReducer,
            schedule: scheduleReducer,
            scheduleTopic: scheduleTopicReducer,
            speaker: speakerReducer,
            speakerSchedule: speakerScheduleReducer,
            callForPaper: callForPaperReducer,
            participant: participantReducer,
            user: userReducer,
            adminProfile: adminProfileReducer,
            appliedHistory: appliedHistoryReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
