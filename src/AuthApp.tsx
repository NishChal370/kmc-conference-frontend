import { Outlet } from "react-router-dom";

function AuthApp() {
      return (
            <div className="flex flex-col justify-center w-full h-full text-sm">
                  <Outlet />
            </div>
      );
}

export default AuthApp;
