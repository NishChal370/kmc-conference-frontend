import { lazy } from "react";

const Days = lazy(() => import("@/admin/pages/conferenceDay/ConferenceDay"));
const AdminDayTheme = lazy(() => import("@/admin/pages/dayTheme/AdminDayTheme"));

const AdminSpeakers = lazy(() => import("@/admin/pages/speaker/AdminSpeakers"));
const AdminSchedule = lazy(() => import("@/admin/pages/schedule/AdminSchedule"));
const AdminCallForPaper = lazy(() => import("@/admin/pages/callForPaper/AdminCallForPaper"));
const AdminParticipant = lazy(() => import("@/admin/pages/participant/AdminParticipant"));
const AdminUser = lazy(() => import("@/admin/pages/user/AdminUser"));

const ProfileSetting = lazy(() => import("@/admin/pages/profileSetting/ProfileSetting"));
const Profile = lazy(() => import("@/admin/pages/profileSetting/profile/Profile"));
const ChangePasswordContainer = lazy(
      () => import("@/admin/pages/profileSetting/changePassword/container/ChangePasswordContainer")
);

const AppliedSpeaking = lazy(() => import("@/admin/pages/profileSetting/appliedHistory/AppliedSpeaking"));
const AppliedParticipation = lazy(
      () => import("@/admin/pages/profileSetting/appliedHistory/AppliedParticipation")
);
const AppliedCallForPaper = lazy(
      () => import("@/admin/pages/profileSetting/appliedHistory/AppliedCallForPaper")
);

const NotFound = lazy(() => import("@/site/pages/notFound/NotFound"));

export {
      Days,
      AdminDayTheme,
      AdminSchedule,
      AdminSpeakers,
      AdminCallForPaper,
      AdminParticipant,
      AdminUser,
      Profile,
      ProfileSetting,
      ChangePasswordContainer,
      AppliedSpeaking,
      AppliedParticipation,
      AppliedCallForPaper,
      NotFound,
};
