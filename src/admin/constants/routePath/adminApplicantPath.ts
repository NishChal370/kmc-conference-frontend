import { ADMIN_BASE_PATH } from ".";

export const ADMIN_APPLICANT_PATH = {
      base: {
            basic: "applicant",
            full: `/${ADMIN_BASE_PATH}/applicant`,
      },

      speaker: {
            basic: "speaker",
            full: `/${ADMIN_BASE_PATH}/applicant/speaker`,
      },

      callForPaper: {
            basic: "call-for-paper",
            full: `/${ADMIN_BASE_PATH}/applicant/call-for-paper`,
      },

      participant: {
            basic: "participant",
            full: `/${ADMIN_BASE_PATH}/applicant/participant`,
      },
} as const;