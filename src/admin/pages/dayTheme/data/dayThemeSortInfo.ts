import { DAY_THEME_HEADER_LIST } from "./dayThemeHeader";

export const dayThemeSortValue: string[] = DAY_THEME_HEADER_LIST
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);