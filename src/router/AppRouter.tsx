import { Outlet, createBrowserRouter } from "react-router-dom";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import { AdminRouter } from "./AdminRouter";

const AppRouter = createBrowserRouter([
      {
            element: <Outlet />,
            children: [PublicRouter, AuthRouter, AdminRouter],
      },
]);

export default AppRouter;
