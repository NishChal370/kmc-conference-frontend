import { UserRole } from "@/enum/commonEnum";
import getTokenDetail from "@/utils/token/getTokenDetail";
import { ReactElement, memo, useMemo } from "react";

interface IRoleBasedAccess {
      allowedRoles?: UserRole[];
      notAllowedRoles?: UserRole[];
      children: ReactElement;
}

function RoleBasedAccess({ allowedRoles, notAllowedRoles, children }: IRoleBasedAccess): ReactElement | null {
      const isAllowed = useMemo(() => {
            const loggedInUserRole = getTokenDetail.loggedInUserRole();

            return allowedRoles
                  ? allowedRoles.some((role) => role === loggedInUserRole)
                  : notAllowedRoles?.length && !notAllowedRoles.find((role) => role === loggedInUserRole);
      }, [allowedRoles, notAllowedRoles]);

      if (isAllowed) return children;

      return null;
}

export default memo(RoleBasedAccess);
