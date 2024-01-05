import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function AuthApp() {
      return (
            <div className="flex flex-col justify-center w-full h-full text-sm">
                  <Outlet />

                  <ToastContainer />
            </div>
      );
}

export default AuthApp;
