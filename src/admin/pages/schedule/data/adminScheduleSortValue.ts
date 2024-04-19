import { ADMIN_SESSION_TABLE_HEADER } from "./adminScheduleHeaders";

export const ADMIN_SCHEDULE_SORT_VALUE: string[] = ADMIN_SESSION_TABLE_HEADER
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);