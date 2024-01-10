import { lazy } from "react";

const Days = lazy(() => import("@/admin/pages/conferenceDay/ConferenceDay"));

const AdminSpeakers = lazy(() => import("@/admin/pages/speaker/AdminSpeakers"));
const AdminSchedule = lazy(() => import("@/admin/pages/schedule/AdminSchedule"));

export { Days, AdminSchedule, AdminSpeakers };
