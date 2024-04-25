import { RouteObject } from "react-router-dom";
import { ADMIN_LOG_PATH } from "../constants/routePath";
import { AuditLog } from "./adminIndex";
import CheckAdminRoleRoute from "../helper/validateRoute/CheckAdminRoleRoute";
import { UserRole } from "@/enum/commonEnum";

export const SuperAdminRouter: RouteObject[] = [
      {
            path: ADMIN_LOG_PATH.base.basic,
            element: <CheckAdminRoleRoute allowedRole={[UserRole.SUPER_ADMIN]} />,
            children: [
                  {
                        path: ADMIN_LOG_PATH.auditLog.basic,
                        element: <AuditLog />,
                  },
            ],
      },
];
