import { lazy } from 'react';


/*** Container  ****/
export const App = lazy(() => import("@/site/App"));
export const AuthApp = lazy(() => import("@/AuthApp"));



export const Home = lazy(() => import("@/site/pages/home/Home"));

export const Schedule = lazy(() => import("@/site/pages/schedule/Schedule"));
export const ScheduleDetail = lazy(() => import("@/site/pages/scheduelDetail/ScheduleDetail"));
export const Speaker = lazy(() => import("@/site/pages/speakers/Speaker"));
export const AboutUs = lazy(() => import("@/site/pages/aboutUs/AboutUs"));
export const Organizer = lazy(() => import("@/site/pages/organizer/Organizer"));



export const Login = lazy(() => import("@/site/pages/login/Login"));
export const RegisterUser = lazy(() => import("@/site/pages/registerUser/RegisterUser"));
export const ForgotPassword = lazy(() => import("@/site/pages/forgotPassword/ForgotPassword"));















