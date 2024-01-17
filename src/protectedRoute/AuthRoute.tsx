import { Navigate, Outlet } from "react-router-dom";
import Loading from "@/shared/loading/Loading";
import { useAppSelector } from "@/app/hooks";
import { verifyLoginState } from "./feature/verifyLoginSlice";
import { Status } from "@/enum/commonEnum";
import { HOME_PATH } from "@/site/constants/routePath";

function AuthRoute() {
      const { status } = useAppSelector(verifyLoginState);

      // move to home page if user try to go to login page event if they are logged in.
      if (status === Status.SUCCEEDED) return <Navigate to={HOME_PATH.home.full} replace />;

      if (status === Status.LOADING) return <Loading />;

      return <Outlet />;
}

export default AuthRoute;
