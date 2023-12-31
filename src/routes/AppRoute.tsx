import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { HOME_PATH, SCHEDULE_PATH } from "@/constants/routePath/path-normalUser";
import { App, Home, Schedule, ScheduleDetail } from "./index";

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
                                    path: SCHEDULE_PATH.schedule.basic,
                                    element: <Outlet />,
                                    children: [
                                          {
                                                index: true,
                                                element: <Schedule />,
                                          },
                                          {
                                                path: SCHEDULE_PATH.detail.basic,
                                                element: <ScheduleDetail />,
                                          },
                                    ],
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
