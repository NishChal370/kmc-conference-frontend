import { ADMIN_BASE_PATH } from "./adminBasePath";

export const ADMIN_LOG_PATH = {
      base: {
            basic: "log",
            full: `/${ADMIN_BASE_PATH}/log`,
      },

      auditLog: {
            basic: "audit-log",
            full: `/${ADMIN_BASE_PATH}/log/audit-log`,
      },
} as const;