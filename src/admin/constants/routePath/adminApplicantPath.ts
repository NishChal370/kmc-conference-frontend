import { ADMIN_BASE_PATH } from ".";

export const ADMIN_APPLICANT_PATH = {
      base: {
            basic: "applicant",
            full: `${ADMIN_BASE_PATH}/applicant`,
      },

      speaker: {
            basic: "speaker",
            full: `applicant/speaker`,
      },

      callForPaper: {
            basic: "call-for-paper",
            full: `applicant/call-for-paper`,
      },

      participant: {
            basic: "participant",
            full: `applicant/participant`,
      },
} as const;