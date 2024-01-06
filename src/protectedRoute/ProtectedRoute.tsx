import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import useAuthApi from "@/hooks/auth/useAuthApi";

function ProtectedRoute() {
      const { verifyLogin } = useAuthApi();

      console.log("Called");
      useEffect(() => {
            verifyLogin();
      }, []);

      return <Outlet />;
}

export default ProtectedRoute;
