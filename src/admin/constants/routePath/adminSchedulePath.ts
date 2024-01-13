import { ADMIN_BASE_PATH } from "./index";

export const ADMIN_SCHEDULE_PATH = {
      schedule: {
            basic: "schedule/:themeId?",
            paramName: "themeId",
            full: (themeId?: number) => `/${ADMIN_BASE_PATH}/schedule${themeId ? ("/" + themeId) : ""}`,
      }
}