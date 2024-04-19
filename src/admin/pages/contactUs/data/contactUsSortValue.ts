import { CONTACT_US_TABLE_HEADER } from "./adminContactUsTableHeader";

export const CONTACT_US_SORT_VALUE = CONTACT_US_TABLE_HEADER
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);