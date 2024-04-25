import { NEWS_TABLE_HEADER } from "./newsTableHeader";

export const NEWS_SORT_VALUE = NEWS_TABLE_HEADER
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);