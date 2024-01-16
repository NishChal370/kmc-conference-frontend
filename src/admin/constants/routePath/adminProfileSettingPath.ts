import { ADMIN_BASE_PATH } from ".";

export const ADMIN_PROFILE_SETTING_PATH = {
      base: {
            basic: "profile-setting",
            full: `/${ADMIN_BASE_PATH}/profile-setting`,
      },

      profileSetting: {
            basic: "profile",
            full: `/${ADMIN_BASE_PATH}/profile-setting/profile`,
      },

      changePassword: {
            basic: "change-password",
            full: `/${ADMIN_BASE_PATH}/profile-setting/change-password`,
      }
}