import getUniqueId from "@/utils/uniqueId/getUniqueId";
import { MEMBER_PATH } from "@/site/constants/routePath";

export const MEMBER_PROFILE_NAV_BAR = [
      {
            id: getUniqueId(),
            title: "Profile",
            navItems: [
                  {
                        id: getUniqueId(),
                        label: "Edit Profile",
                        icon: "user",
                        path: MEMBER_PATH.profileSetting.full,
                  },

                  {
                        id: getUniqueId(),
                        label: "Change Password",
                        icon: "lock",
                        path: MEMBER_PATH.changePassword.full,
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
                        path: MEMBER_PATH.appliedSpeaking.full,
                  },

                  {
                        id: getUniqueId(),
                        label: "Call For Paper",
                        icon: undefined,
                        path: MEMBER_PATH.appliedCallForPaper.full,
                  },

                  {
                        id: getUniqueId(),
                        label: "Participation",
                        icon: undefined,
                        path: MEMBER_PATH.appliedParticipation.full,
                  },
            ]
      }
];