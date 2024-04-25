import { UserRole } from "@/enum/commonEnum";
import { Navigate, Outlet } from "react-router-dom";
import getTokenDetail from "@/utils/token/getTokenDetail";

type ICheckAdminRoleRoute =
      | { allowedRole: UserRole[]; notAllowedRole?: never }
      | { allowedRole?: never; notAllowedRole: UserRole[] };

/**
 * Protects routes by checking user roles against allowed or not allowed roles.
 * Redirects to /not-found if the current user's role does not meet the specified conditions.
 * @param allowedRole Array of roles permitted to access the route.
 * @param notAllowedRole Array of roles denied access to the route.
 */
function CheckAdminRoleRoute({ allowedRole, notAllowedRole }: ICheckAdminRoleRoute) {
      const currentUserRole = getTokenDetail.loggedInUserRole();

      // Ensures there is a user role to check against
      if (!currentUserRole) {
            return <Navigate to="/not-found" replace />;
      }

      // Handle allowed roles
      if (allowedRole && !allowedRole.includes(currentUserRole)) {
            return <Navigate to="/not-found" replace />;
      }

      // Handle not allowed roles
      if (notAllowedRole && notAllowedRole.includes(currentUserRole)) {
            return <Navigate to="/not-found" replace />;
      }

      // Render children routes if role checks are passed
      return <Outlet />;
}

export default CheckAdminRoleRoute;
