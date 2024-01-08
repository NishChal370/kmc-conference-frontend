import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./layout/Footer";
import TopNav from "./layout/topNav/TopNav";

function App() {
      return (
            <div className="flex flex-col justify-center w-full h-full">
                  <TopNav />

                  <main className="flex flex-col items-center w-full [&>span]:mb-40">
                        <Outlet />
                  </main>

                  <Footer />

                  <ToastContainer />
            </div>
      );
}

export default App;
