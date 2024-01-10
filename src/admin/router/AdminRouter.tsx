import { Suspense } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import AdminApp from "@/admin/AdminApp";
import Loading from "@/shared/loading/Loading";
import { AdminSchedule, AdminSpeakers, Days } from "./adminIndex";
import { PrivateRoute } from "@/protectedRoute";
import {
      ADMIN_BASE_PATH,
      ADMIN_SCHEDULE_PATH,
      ADMIN_SPEAKERS_PATH,
      ADMIN_DAYS_PATH,
} from "@/admin/constants/routePath";

export const AdminRouter: RouteObject = {
      path: ADMIN_BASE_PATH,
      element: <PrivateRoute />,
      children: [
            {
                  element: (
                        <Suspense fallback={<Loading />}>
                              <AdminApp />
                        </Suspense>
                  ),
                  children: [
                        {
                              index: true,
                              element: <h1>Dashboard</h1>,
                        },
                        {
                              path: ADMIN_DAYS_PATH.day.basic,
                              element: <Days />,
                        },
                        {
                              path: ADMIN_SCHEDULE_PATH.schedule.basic,
                              element: <AdminSchedule />,
                        },

                        {
                              path: ADMIN_SPEAKERS_PATH.speaker.basic,
                              element: <Outlet />,
                              children: [
                                    {
                                          index: true,
                                          element: <AdminSpeakers />,
                                    },
                              ],
                        },
                        {
                              path: "*",
                              element: <h1>Not found from admin</h1>,
                        },
                  ],
            },
      ],
};
