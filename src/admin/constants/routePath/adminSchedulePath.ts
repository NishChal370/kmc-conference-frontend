import { ADMIN_BASE_PATH } from "./adminBasePath";

export const ADMIN_SCHEDULE_PATH = {
      schedule: {
            basic: "schedule/:themeId?",
            paramName: "themeId",
            full: (themeId?: number) => `/${ADMIN_BASE_PATH}/schedule${themeId ? ("/" + themeId) : ""}`,
      }
}