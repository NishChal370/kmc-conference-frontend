import { Outlet } from "react-router-dom";
import TopNav from "./layout-normalUser/TopNav";
import Footer from "./layout-normalUser/Footer";

function App() {
      return (
            <div className="flex flex-col justify-center gap-10 w-full h-full">
                  <TopNav />

                  <main className="flex flex-col gap-52 items-center w-full mb-10">
                        <Outlet />
                  </main>

                  <Footer />
            </div>
      );
}

export default App;
