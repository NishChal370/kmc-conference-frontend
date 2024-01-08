import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/protectedRoute";
import AuthRouter from "./AuthRouter";
import PublicRouter from "./PublicRouter";
import { AdminRouter } from "../admin/router/AdminRouter";

const AppRouter = createBrowserRouter([
      {
            element: <ProtectedRoute />,
            children: [PublicRouter, AuthRouter, AdminRouter],
      },
]);

export default AppRouter;
