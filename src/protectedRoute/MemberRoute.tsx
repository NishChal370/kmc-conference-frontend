import { Navigate, Outlet } from "react-router-dom";
import Loading from "@/shared/loading/Loading";
import { useAppSelector } from "@/app/hooks";
import { verifyLoginState } from "./feature/verifyLoginSlice";
import { Status, UserRole } from "@/enum/commonEnum";
import getTokenDetail from "@/utils/token/getTokenDetail";

/**
 * It checks if user is loggedIn and have role user.
 * @returns
 */
function MemberRoute() {
      const { status } = useAppSelector(verifyLoginState);

      if (status === Status.FAILED) return <Navigate to="/" replace />;

      if (status === Status.SUCCEEDED && getTokenDetail.loggedInUserRole() !== UserRole.USER)
            return <Navigate to="/not-found" replace />;

      if (status === Status.SUCCEEDED) return <Outlet />;

      return <Loading />;
}

export default MemberRoute;
