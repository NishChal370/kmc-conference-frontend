
import { ADMIN_DASHBOARD_PATH, ADMIN_DAYS_PATH, ADMIN_DAY_THEME_PATH, ADMIN_SCHEDULE_PATH, ADMIN_APPLICANT_PATH } from "@/admin/constants/routePath";
import { ADMIN_ADMINISTRATION_PATH } from "@/admin/constants/routePath/adminAdministrationPath";
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
            Icon: "dashboard",
            pathName: ADMIN_DAYS_PATH.day.full,
      },

      {
            id: getUniqueId(),
            title: "Theme",
            Icon: "dashboard",
            pathName: ADMIN_DAY_THEME_PATH.theme.full(),
      },

      {
            id: getUniqueId(),
            title: "Session",
            Icon: "dashboard",
            pathName: ADMIN_SCHEDULE_PATH.schedule.full(),
      },

      {
            id: getUniqueId(),
            title: "Applicants",
            Icon: "dashboard",
            pathName: ADMIN_APPLICANT_PATH.base.basic,
            subNav: [
                  {
                        id: getUniqueId(),
                        title: "Speaker",
                        Icon: "dashboard",
                        pathName: ADMIN_APPLICANT_PATH.speaker.full,
                  },
                  {
                        id: getUniqueId(),
                        title: "Call For Paper",
                        Icon: "dashboard",
                        pathName: ADMIN_APPLICANT_PATH.callForPaper.full,
                  },

                  {
                        id: getUniqueId(),
                        title: "Participant",
                        Icon: "dashboard",
                        pathName: ADMIN_APPLICANT_PATH.participant.full,
                  },
            ]
      },

      {
            id: getUniqueId(),
            title: "Administration",
            Icon: "dashboard",
            pathName: ADMIN_ADMINISTRATION_PATH.base.basic,
            subNav: [
                  {
                        id: getUniqueId(),
                        title: "User",
                        Icon: "dashboard",
                        pathName: ADMIN_ADMINISTRATION_PATH.user.full,
                  },
            ]
      },

];