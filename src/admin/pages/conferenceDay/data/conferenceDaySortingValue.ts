import { CONFERENCE_DAY_TABLE_HEADER } from "./conferenceDayTableHeader";

export const CONFERENCE_DAY_SORT_VALUE = CONFERENCE_DAY_TABLE_HEADER
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);