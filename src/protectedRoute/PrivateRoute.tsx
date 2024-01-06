import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "@/app/hooks";
import { verifyLoginState } from "./feature/verifyLoginSlice";
import { Status, UserRole } from "@/enum/commonEnum";
import { HOME_PATH } from "@/constants/routePath/path-normalUser";
import getTokenDetail from "@/utils/token/getTokenDetail";

function PrivateRoute() {
      const { status } = useAppSelector(verifyLoginState);

      if (status === Status.FAILED) return <Navigate to={HOME_PATH.home.full} replace />;

      if (status === Status.SUCCEEDED && getTokenDetail.loggedInUserRole() === UserRole.PARTICIPANTS)
            return <Navigate to={HOME_PATH.home.full} replace />;

      if (status === Status.SUCCEEDED) return <Outlet />;

      return <h1> Loading .....</h1>;
}

export default PrivateRoute;
