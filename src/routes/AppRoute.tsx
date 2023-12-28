import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { App } from "./index";

const AppRoute = createBrowserRouter([
      {
            element: (
                  <Suspense fallback={<h1>loading....</h1>}>
                        <App />
                  </Suspense>
            ),
            children: [
                  {
                        element: <Outlet />, //TODO: Implement protected route.
                        children: [
                              {
                                    index: true,
                                    element: <h1>Home</h1>,
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
