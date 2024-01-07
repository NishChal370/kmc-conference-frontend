import { lazy } from 'react';


/*** Container  ****/
export const App = lazy(() => import("@/App"));
export const AuthApp = lazy(() => import("@/AuthApp"));



export const Home = lazy(() => import("@/pages-normalUser/home/Home"));

export const Schedule = lazy(() => import("@/pages-normalUser/schedule/Schedule"));
export const ScheduleDetail = lazy(() => import("@/pages-normalUser/scheduleDetail/ScheduleDetail"));
export const Speaker = lazy(() => import("@/pages-normalUser/speakers/Speaker"));
export const AboutUs = lazy(() => import("@/pages-normalUser/aboutUs/AboutUs"));
export const Organizer = lazy(() => import("@/pages-normalUser/organizer/Organizer"));



export const Login = lazy(() => import("@/pages-normalUser/login/Login"));
export const RegisterUser = lazy(() => import("@/pages-normalUser/registerUser/RegisterUser"));













