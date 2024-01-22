import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/protectedRoute";
import AuthRouter from "../site/router/AuthRouter";
import PublicRouter from "../site/router/PublicRouter";
import MemberRouter from "@/site/router/MemberRouter";
import { AdminRouter } from "../admin/router/AdminRouter";

const AppRouter = createBrowserRouter([
      {
            element: <ProtectedRoute />,
            children: [PublicRouter, AuthRouter, AdminRouter, MemberRouter],
      },
]);

export default AppRouter;
