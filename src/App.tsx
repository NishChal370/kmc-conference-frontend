import { Outlet } from "react-router-dom";

function App() {
      return (
            <div className="flex flex-col justify-center gap-10 w-full h-full">
                  <main className="flex items-center w-full">
                        <Outlet />
                  </main>
            </div>
      );
}

export default App;
