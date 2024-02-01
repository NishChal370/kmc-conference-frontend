
import { ADMIN_DASHBOARD_PATH, ADMIN_DAYS_PATH, ADMIN_DAY_THEME_PATH, ADMIN_SCHEDULE_PATH, ADMIN_APPLICANT_PATH, ADMIN_ADMINISTRATION_PATH, ADMIN_INFORMATION_PATH } from "@/admin/constants/routePath";
import { ISideNavDetail } from "@/admin/model/sideNav/sideNavModel";
import getUniqueId from "@/utils/uniqueId/getUniqueId"

export const SIDE_NAV_LIST: ReadonlyArray<ISideNavDetail> = [
      {
            id: getUniqueId(),
            title: "Dashboard",
            Icon: "dashboard",
            pathName: ADMIN_DASHBOARD_PATH.dashboard.full,
      },

      {
            id: getUniqueId(),
            title: "Conference Day",
            Icon: "conference-day",
            pathName: ADMIN_DAYS_PATH.day.full,
      },

      {
            id: getUniqueId(),
            title: "Theme",
            Icon: "theme",
            pathName: ADMIN_DAY_THEME_PATH.theme.full(),
      },

      {
            id: getUniqueId(),
            title: "Session",
            Icon: "session",
            pathName: ADMIN_SCHEDULE_PATH.schedule.full(),
      },

      {
            id: getUniqueId(),
            title: "Applicants",
            Icon: "applicants",
            pathName: ADMIN_APPLICANT_PATH.base.basic,
            subNav: [
                  {
                        id: getUniqueId(),
                        title: "Speaker",
                        Icon: "speaker",
                        pathName: ADMIN_APPLICANT_PATH.speaker.full,
                  },
                  {
                        id: getUniqueId(),
                        title: "Call For Paper",
                        Icon: "callForPaper",
                        pathName: ADMIN_APPLICANT_PATH.callForPaper.full,
                  },

                  {
                        id: getUniqueId(),
                        title: "Participant",
                        Icon: "participant",
                        pathName: ADMIN_APPLICANT_PATH.participant.full,
                  },
            ]
      },

      {
            id: getUniqueId(),
            title: "Administration",
            Icon: "administration",
            pathName: ADMIN_ADMINISTRATION_PATH.base.basic,
            subNav: [
                  {
                        id: getUniqueId(),
                        title: "User",
                        Icon: "registered-user",
                        pathName: ADMIN_ADMINISTRATION_PATH.user.full,
                  },
            ]
      },

      {
            id: getUniqueId(),
            title: "Information",
            Icon: "information",
            pathName: ADMIN_INFORMATION_PATH.base.basic,
            subNav: [
                  {
                        id: getUniqueId(),
                        title: "News and Updates",
                        Icon: "news",
                        pathName: ADMIN_INFORMATION_PATH.newsAndUpdates.full,
                  },
            ]
      },

];