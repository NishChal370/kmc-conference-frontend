import { lazy } from "react";

const Days = lazy(() => import("@/admin/pages/conferenceDay/ConferenceDay"));
const AdminDayTheme = lazy(() => import("@/admin/pages/dayTheme/AdminDayTheme"));

const AdminSpeakers = lazy(() => import("@/admin/pages/speaker/AdminSpeakers"));
const AdminSchedule = lazy(() => import("@/admin/pages/schedule/AdminSchedule"));
const AdminCallForPaper = lazy(() => import("@/admin/pages/callForPaper/AdminCallForPaper"));

export { Days, AdminDayTheme, AdminSchedule, AdminSpeakers, AdminCallForPaper };
