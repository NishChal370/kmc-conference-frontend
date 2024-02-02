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
      Profile,
      ProfileSetting,
      AppliedSpeaking,
      AppliedParticipation,
      AppliedCallForPaper,
      ChangePasswordContainer,
      NotFound,
      AdminNews,
      AdminContactUs,
} from "./adminIndex";
import { PrivateRoute } from "@/protectedRoute";
import {
      ADMIN_BASE_PATH,
      ADMIN_SCHEDULE_PATH,
      ADMIN_DAYS_PATH,
      ADMIN_DAY_THEME_PATH,
      ADMIN_APPLICANT_PATH,
      ADMIN_ADMINISTRATION_PATH,
      ADMIN_PROFILE_SETTING_PATH,
      ADMIN_INFORMATION_PATH,
} from "@/admin/constants/routePath";
import { CheckDynamicRouteType } from "@/helper/validateRoute";

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
                              path: ADMIN_PROFILE_SETTING_PATH.base.basic,
                              element: <ProfileSetting />,
                              children: [
                                    {
                                          index: true,
                                          element: (
                                                <Navigate
                                                      to={ADMIN_PROFILE_SETTING_PATH.profileSetting.basic}
                                                      replace
                                                />
                                          ),
                                    },
                                    {
                                          path: ADMIN_PROFILE_SETTING_PATH.profileSetting.basic,
                                          element: <Profile />,
                                    },
                                    {
                                          path: ADMIN_PROFILE_SETTING_PATH.changePassword.basic,
                                          element: <ChangePasswordContainer />,
                                    },
                                    {
                                          path: ADMIN_PROFILE_SETTING_PATH.appliedSpeaking.basic,
                                          element: <AppliedSpeaking />,
                                    },
                                    {
                                          path: ADMIN_PROFILE_SETTING_PATH.appliedCallForPaper.basic,
                                          element: <AppliedCallForPaper />,
                                    },
                                    {
                                          path: ADMIN_PROFILE_SETTING_PATH.appliedParticipation.basic,
                                          element: <AppliedParticipation />,
                                    },
                                    {
                                          path: "*",
                                          element: <NotFound />,
                                    },
                              ],
                        },

                        {
                              path: ADMIN_INFORMATION_PATH.base.basic,
                              element: <Outlet />,
                              children: [
                                    {
                                          index: true,
                                          element: (
                                                <Navigate
                                                      to={ADMIN_INFORMATION_PATH.newsAndUpdates.basic}
                                                      replace
                                                />
                                          ),
                                    },
                                    {
                                          path: ADMIN_INFORMATION_PATH.newsAndUpdates.basic,
                                          element: <AdminNews />,
                                    },
                                    {
                                          path: ADMIN_INFORMATION_PATH.contactUs.basic,
                                          element: <AdminContactUs />,
                                    },

                                    {
                                          path: "*",
                                          element: <NotFound />,
                                    },
                              ],
                        },
                        {
                              path: "*",
                              element: <NotFound />,
                        },
                  ],
            },
      ],
};
