import { ADMIN_BASE_PATH } from ".";

export const ADMIN_DAY_THEME_PATH = {
      theme: {
            basic: "theme/:dayId?",
            paramName: "dayId",
            full: (dayId?: number) => dayId ? `/${ADMIN_BASE_PATH}/theme/${dayId}` : `/${ADMIN_BASE_PATH}/theme`,
      }
}