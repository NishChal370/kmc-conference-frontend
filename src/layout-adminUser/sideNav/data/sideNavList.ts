import { ADMIN_DASHBOARD_PATH } from "@/constants/routePath/path-adminUser";
import { ADMIN_SCHEDULE_PATH } from "@/constants/routePath/path-adminUser/adminSchedulePath";
import { ISideNavDetail } from "@/model-adminUser/sideNav/sideNavModel";
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
];