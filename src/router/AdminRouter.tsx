import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import AdminApp from "@/AdminApp";
import { PrivateRoute } from "@/protectedRoute";
import { ADMIN_BASE_PATH } from "@/constants/routePath/path-adminUser";

export const AdminRouter: RouteObject = {
      path: ADMIN_BASE_PATH,
      element: <PrivateRoute />,
      children: [
            {
                  element: (
                        <Suspense fallback={<h1>loading Suspense....</h1>}>
                              <AdminApp />
                        </Suspense>
                  ),
                  children: [
                        {
                              index: true,
                              element: <h1>Dashboard</h1>,
                        },
                        {
                              path: "*",
                              element: <h1>Not found from admin</h1>,
                        },
                  ],
            },
      ],
};
