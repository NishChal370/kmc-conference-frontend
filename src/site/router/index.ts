import { lazy } from 'react';


/*** Container  ****/
export const App = lazy(() => import("@/site/App"));
export const AuthApp = lazy(() => import("@/AuthApp"));


export const NotFound = lazy(() => import("@/site/pages/notFound/NotFound"));


export const Home = lazy(() => import("@/site/pages/home/Home"));

export const Schedule = lazy(() => import("@/site/pages/schedule/Schedule"));
export const ScheduleDetail = lazy(() => import("@/site/pages/scheduelDetail/ScheduleDetail"));
export const Speaker = lazy(() => import("@/site/pages/speakers/Speaker"));
export const AboutUs = lazy(() => import("@/site/pages/aboutUs/AboutUs"));
export const Organizer = lazy(() => import("@/site/pages/organizer/Organizer"));



export const Login = lazy(() => import("@/site/pages/login/Login"));
export const RegisterUser = lazy(() => import("@/site/pages/registerUser/RegisterUser"));
export const ForgotPassword = lazy(() => import("@/site/pages/forgotPassword/ForgotPassword"));
export const ResetPassword = lazy(() => import("@/site/pages/resetPassword/ResetPassword"));
export const VerifyEmail = lazy(() => import("@/site/pages/verifyEmail/VerifyEmail"));



export const MemberProfileSetting = lazy(() => import("@/site/pages/memberProfileSetting/MemberProfileSetting"));
export const Profile = lazy(() => import("@/admin/pages/profileSetting/profile/Profile"));
export const ChangePasswordContainer = lazy(
      () => import("@/admin/pages/profileSetting/changePassword/container/ChangePasswordContainer")
);

export const AppliedSpeaking = lazy(() => import("@/admin/pages/profileSetting/appliedHistory/AppliedSpeaking"));
export const AppliedParticipation = lazy(
      () => import("@/admin/pages/profileSetting/appliedHistory/AppliedParticipation")
);
export const AppliedCallForPaper = lazy(
      () => import("@/admin/pages/profileSetting/appliedHistory/AppliedCallForPaper")
);


















