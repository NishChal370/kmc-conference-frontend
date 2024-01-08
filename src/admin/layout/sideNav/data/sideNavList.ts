
import { ADMIN_DASHBOARD_PATH, ADMIN_SCHEDULE_PATH, ADMIN_SPEAKERS_PATH } from "@/admin/constants/routePath";
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
            title: "Schedule",
            Icon: "dashboard",
            pathName: ADMIN_SCHEDULE_PATH.schedule.full,
      },
      {
            id: getUniqueId(),
            title: "Speaker",
            Icon: "dashboard",
            pathName: ADMIN_SPEAKERS_PATH.speaker.full,
      },
];