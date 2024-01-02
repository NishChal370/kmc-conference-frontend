import { Suspense } from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
import {
      ABOUT_US_PATH,
      HOME_PATH,
      ORGANIZERS_PATH,
      SCHEDULE_PATH,
      SPEAKER_PATH,
} from "@/constants/routePath/path-normalUser";
import { AboutUs, App, Home, Organizer, Schedule, ScheduleDetail, Speaker } from "./index";

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
                                    path: SPEAKER_PATH.speaker.basic,
                                    element: <Speaker />,
                              },

                              {
                                    path: ABOUT_US_PATH.aboutUs.basic,
                                    element: <AboutUs />,
                              },

                              {
                                    path: ORGANIZERS_PATH.organizer.basic,
                                    element: <Organizer />,
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
