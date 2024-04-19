import { USER_HEADER_LIST } from "./userHeaderList";

export const USER_SORT_VALUE = USER_HEADER_LIST
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);