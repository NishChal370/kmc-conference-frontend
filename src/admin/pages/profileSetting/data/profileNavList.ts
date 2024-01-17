import { ADMIN_PROFILE_SETTING_PATH } from "@/admin/constants/routePath";
import getUniqueId from "@/utils/uniqueId/getUniqueId";

export const PROFILE_NAV_BAR = [
      {
            id: getUniqueId(),
            title: "Profile",
            navItems: [
                  {
                        id: getUniqueId(),
                        label: "Edit Profile",
                        icon: "user",
                        path: ADMIN_PROFILE_SETTING_PATH.profileSetting.full,
                  },

                  {
                        id: getUniqueId(),
                        label: "Change Password",
                        icon: "lock",
                        path: ADMIN_PROFILE_SETTING_PATH.changePassword.full,
                  },
            ]
      },

      {
            id: getUniqueId(),
            title: "Applied History",
            navItems: [
                  {
                        id: getUniqueId(),
                        label: "Speaking",
                        icon: undefined,
                        path: ADMIN_PROFILE_SETTING_PATH.appliedSpeaking.full,
                  },

                  {
                        id: getUniqueId(),
                        label: "Call For Paper",
                        icon: undefined,
                        path: ADMIN_PROFILE_SETTING_PATH.appliedCallForPaper.full,
                  },

                  {
                        id: getUniqueId(),
                        label: "Participation",
                        icon: undefined,
                        path: ADMIN_PROFILE_SETTING_PATH.appliedParticipation.full,
                  },
            ]
      }
];