import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import TopNav from "./layout-adminUser/topNav/TopNav";
import SideNav from "./layout-adminUser/sideNav/SideNav";

function AdminApp() {
      return (
            <>
                  <TopNav />

                  <main
                        id="main-container"
                        className="relative flex w-full gap-0 justify-between mt-[5.2rem]
                              md:static
                        "
                  >
                        <SideNav />

                        <div className="w-full p-4 flex flex-col gap-10 overflow-hidden">
                              <Outlet />
                        </div>
                  </main>

                  <ToastContainer />
            </>
      );
}

export default AdminApp;