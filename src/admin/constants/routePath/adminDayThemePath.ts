import { ADMIN_BASE_PATH } from ".";

export const ADMIN_DAY_THEME_PATH = {
      theme: {
            basic: ":dayId?/theme",
            paramName: "dayId",
            full: (dayId?: number) => dayId ? `/${ADMIN_BASE_PATH}/${dayId}/theme` : `/${ADMIN_BASE_PATH}/theme`,
      }
}