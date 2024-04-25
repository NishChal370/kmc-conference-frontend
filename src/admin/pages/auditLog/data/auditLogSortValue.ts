import { AUDIT_LOG_TABLE_HEADER } from "./auditLogTableHeader";

export const AUDIT_LOG_SORT_VALUE = AUDIT_LOG_TABLE_HEADER
      .map(header => header.sortValue)
      .filter((value): value is string => value !== undefined);