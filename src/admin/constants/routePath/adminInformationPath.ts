import { ADMIN_BASE_PATH } from ".";

export const ADMIN_INFORMATION_PATH = {
      base: {
            basic: "information",
            full: `/${ADMIN_BASE_PATH}/information`
      },
      newsAndUpdates: {
            basic: "news",
            full: `/${ADMIN_BASE_PATH}/information/news`,
      },
} as const;