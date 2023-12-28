import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { HOME_PATH } from "@/constants/routePath/path-normalUser";
import { App, Home } from "./index";

const AppRoute = createBrowserRouter([
      {
            element: (
                  <Suspense fallback={<h1>loading....</h1>}>
                        <App />
                  </Suspense>
            ),
            children: [
                  {
                        path: HOME_PATH.home.basic,
                        element: <Outlet />, //TODO: Implement protected route.
                        children: [
                              {
                                    index: true,
                                    element: <Home />,
                              },

                              {
                                    path: "*",
                                    element: <h1>Not found</h1>,
                              },
                        ],
                  },
            ],
      },
]);

export default AppRoute;
