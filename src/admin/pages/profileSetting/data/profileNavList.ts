import { ADMIN_PROFILE_SETTING_PATH } from "@/admin/constants/routePath";
import getUniqueId from "@/utils/uniqueId/getUniqueId";

export const PROFILE_NAV_BAR = [
      {
            id: getUniqueId(),
            label: "Profile",
            path: ADMIN_PROFILE_SETTING_PATH.profileSetting.full,
      },

      {
            id: getUniqueId(),
            label: "Change Password",
            path: ADMIN_PROFILE_SETTING_PATH.changePassword.full,
      },
];