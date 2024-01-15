import { Suspense } from "react";
import { Navigate, Outlet, RouteObject } from "react-router-dom";
import AdminApp from "@/admin/AdminApp";
import Loading from "@/shared/loading/Loading";
import {
      AdminSchedule,
      AdminSpeakers,
      Days,
      AdminDayTheme,
      AdminCallForPaper,
      AdminParticipant,
      AdminUser,
} from "./adminIndex";
import { PrivateRoute } from "@/protectedRoute";
import {
      ADMIN_BASE_PATH,
      ADMIN_SCHEDULE_PATH,
      ADMIN_DAYS_PATH,
      ADMIN_DAY_THEME_PATH,
      ADMIN_APPLICANT_PATH,
} from "@/admin/constants/routePath";
import { CheckDynamicRouteType } from "@/helper/validateRoute";
import { ADMIN_ADMINISTRATION_PATH } from "../constants/routePath/adminAdministrationPath";

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
                              path: ADMIN_DAY_THEME_PATH.theme.basic,
                              element: (
                                    <CheckDynamicRouteType
                                          type="number"
                                          paramName={ADMIN_DAY_THEME_PATH.theme.paramName}
                                    />
                              ),
                              children: [
                                    {
                                          index: true,
                                          element: <AdminDayTheme />,
                                    },
                              ],
                        },

                        {
                              path: ADMIN_SCHEDULE_PATH.schedule.basic,
                              element: (
                                    <CheckDynamicRouteType
                                          type="number"
                                          paramName={ADMIN_SCHEDULE_PATH.schedule.paramName}
                                    />
                              ),
                              children: [{ index: true, element: <AdminSchedule /> }],
                        },

                        {
                              path: ADMIN_APPLICANT_PATH.base.basic,
                              element: <Outlet />,
                              children: [
                                    {
                                          index: true,
                                          element: (
                                                <Navigate to={ADMIN_APPLICANT_PATH.speaker.basic} replace />
                                          ),
                                    },
                                    {
                                          path: ADMIN_APPLICANT_PATH.speaker.basic,
                                          element: <AdminSpeakers />,
                                    },
                                    {
                                          path: ADMIN_APPLICANT_PATH.callForPaper.basic,
                                          element: <AdminCallForPaper />,
                                    },
                                    {
                                          path: ADMIN_APPLICANT_PATH.participant.basic,
                                          element: <AdminParticipant />,
                                    },
                              ],
                        },

                        {
                              path: ADMIN_ADMINISTRATION_PATH.base.basic,
                              element: <Outlet />,
                              children: [
                                    {
                                          index: true,
                                          element: (
                                                <Navigate to={ADMIN_ADMINISTRATION_PATH.user.basic} replace />
                                          ),
                                    },
                                    {
                                          path: ADMIN_ADMINISTRATION_PATH.user.basic,
                                          element: <AdminUser />,
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
