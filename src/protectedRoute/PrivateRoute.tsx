import { Navigate, Outlet } from "react-router-dom";
import Loading from "@/shared/loading/Loading";
import { useAppSelector } from "@/app/hooks";
import { verifyLoginState } from "./feature/verifyLoginSlice";
import { Status, UserRole } from "@/enum/commonEnum";
import getTokenDetail from "@/utils/token/getTokenDetail";

function PrivateRoute() {
      const { status } = useAppSelector(verifyLoginState);

      if (status === Status.FAILED) return <Navigate to="/" replace />;

      if (status === Status.SUCCEEDED && getTokenDetail.loggedInUserRole() === UserRole.USER)
            return <Navigate to="/not-found" replace />;

      if (status === Status.SUCCEEDED) return <Outlet />;

      return <Loading />;
}

export default PrivateRoute;
