import { configureStore } from "@reduxjs/toolkit";



import qrModalReducer from "@/service/qrModal/feature/qrModalSlice";

import loginReducer from "@/site/pages/login/feature/loginSlice";
import verifyLoginReducer from "@/protectedRoute/feature/verifyLoginSlice";
import forgotPasswordReducer from "@/site/pages/forgotPassword/feature/forgotPasswordSlice";
import resetPasswordReducer from "@/site/pages/resetPassword/feature/resetPasswordSlice";
import verifyEmailReducer from "@/site/pages/verifyEmail/feature/verifyEmailSlice";

import registerUserReducer from "@/site/pages/registerUser/feature/registerUserSlice";



/***ADMIN PANEL */
import adminSideNavReducer from "@/admin/layout/sideNav/feature/adminSideNavSlice";

import applicantsStatisticReducer from "@/admin/pages/applicantsStatistic/feature/applicantsStatisticSlice";


import dayThemeReducer from "@/admin/pages/dayTheme/feature/dayThemeSlice";
import conferenceDayReducer from "@/admin/pages/conferenceDay/feature/conferenceDaySlice";
import scheduleReducer from "@/admin/pages/schedule/feature/scheduleSlice";
import scheduleTopicReducer from "@/admin/pages/scheduleTopic/feature/scheduleTopicSlice";
import speakerReducer from "@/admin/pages/speaker/feature/speakerSlice";
import speakerScheduleReducer from "@/admin/pages/speakerSchedule/feature/speakerScheduleSlice";
import callForPaperReducer from "@/admin/pages/callForPaper/feature/callForPaperSlice";
import callForPaperScheduleReducer from "@/admin/pages/callForPaperSchedule/feature/callForPaperScheduleSlice";
import participantReducer from "@/admin/pages/participant/feature/participantSlice";
import userReducer from "@/admin/pages/user/feature/userSlice";
import adminProfileReducer from "@/admin/pages/profileSetting/profile/feature/profileSlice";
import appliedHistoryReducer from "@/admin/pages/profileSetting/appliedHistory/feature/appliedHistorySlice";
import newsReducer from "@/admin/pages/news/feature/newsSlice";
import contactUsReducer from "@/admin/pages/contactUs/feature/contactUsSlice";


import verifyApplicantReducer from "@/admin/pages/verifyApplicant/feature/verifyApplicantSlice";

export const store = configureStore({
      reducer: {
            qrModal: qrModalReducer,


            registerUser: registerUserReducer,
            forgotPassword: forgotPasswordReducer,
            resetPassword: resetPasswordReducer,

            login: loginReducer,
            verifyLogin: verifyLoginReducer,
            verifyEmail: verifyEmailReducer,

            adminSideNav: adminSideNavReducer,

            applicantsStatistic: applicantsStatisticReducer,

            dayTheme: dayThemeReducer,
            conferenceDay: conferenceDayReducer,
            schedule: scheduleReducer,
            scheduleTopic: scheduleTopicReducer,
            speaker: speakerReducer,
            speakerSchedule: speakerScheduleReducer,
            callForPaper: callForPaperReducer,
            callForPaperSchedule: callForPaperScheduleReducer,
            participant: participantReducer,
            user: userReducer,
            adminProfile: adminProfileReducer,
            appliedHistory: appliedHistoryReducer,

            news: newsReducer,

            contactUs: contactUsReducer,

            verifyApplicant: verifyApplicantReducer,
      },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
