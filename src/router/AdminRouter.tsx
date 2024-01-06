import { RouteObject } from "react-router-dom";
import { PrivateRoute } from "@/protectedRoute";

export const AdminRouter: RouteObject = {
      path: "admin",
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
