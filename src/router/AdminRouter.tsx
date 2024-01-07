import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "@/protectedRoute";
import { ADMIN_BASE_PATH } from "@/constants/routePath/path-adminUser";

export const AdminRouter: RouteObject = {
      path: ADMIN_BASE_PATH,
      element: <PrivateRoute />,
      children: [
            {
                  index: true,
                  element: <h1>Admin</h1>,
            },
            {
                  path: "*",
                  element: <h1>Not found from admin</h1>,
            },
      ],
};
