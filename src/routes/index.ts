import { lazy } from 'react';


/*** Container  ****/
export const App = lazy(() => import("@/App"));



export const Home = lazy(() => import("@/pages-normalUser/home/Home"));

export const Schedule = lazy(() => import("@/pages-normalUser/schedule/Schedule"));
export const ScheduleDetail = lazy(() => import("@/pages-normalUser/scheduleDetail/ScheduleDetail"));







