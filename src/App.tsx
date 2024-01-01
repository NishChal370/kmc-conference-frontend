import { Outlet } from "react-router-dom";
import TopNav from "./layout-normalUser/TopNav";
import Footer from "./layout-normalUser/Footer";

function App() {
      return (
            <div className="flex flex-col justify-center w-full h-full">
                  <TopNav />

                  <main className="flex flex-col items-center w-full [&>span]:mb-40">
                        <Outlet />
                  </main>

                  <Footer />
            </div>
      );
}

export default App;
