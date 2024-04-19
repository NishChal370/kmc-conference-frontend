import { CALL_FOR_PAPER_HEADER_LIST } from "./adminCallForPaperHeader";

export const CALL_FOR_PAPER_SORT_VALUE = CALL_FOR_PAPER_HEADER_LIST
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);