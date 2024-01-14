import { ADMIN_BASE_PATH } from ".";

export const ADMIN_USER_PATH = {
      base: {
            basic: "user",
            full: `${ADMIN_BASE_PATH}/user`,
      },

      speaker: {
            basic: "speaker",
            full: `user/speaker`,
      }
} as const;