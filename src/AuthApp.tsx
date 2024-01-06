import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AuthWrapper from "./shared-normalUser/auth/AuthWrapper";

function AuthApp() {
      return (
            <div className="flex flex-col justify-center w-full h-full text-sm">
                  <AuthWrapper>
                        <Outlet />
                  </AuthWrapper>

                  <ToastContainer />
            </div>
      );
}

export default AuthApp;
