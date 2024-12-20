import { Suspense } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import Loading from "@/shared/loading/Loading";
import {
      AboutUs,
      App,
      Home,
      Organizer,
      Schedule,
      ScheduleDetail,
      Speaker,
      NotFound,
      News,
      NewsDetail,
      ContactUs,
} from "./index";
import {
      ABOUT_US_PATH,
      HOME_PATH,
      NEWS_PATH,
      ORGANIZERS_PATH,
      SCHEDULE_PATH,
      SPEAKER_PATH,
      CONTACT_US_PATH,
} from "@/site/constants/routePath";
import { CheckDynamicRouteType } from "@/helper/validateRoute";
import CheckDynamicRouteListType from "@/helper/validateRoute/CheckDynamicRouteListType";

const PublicRouter: RouteObject = {
      path: "/",
      element: (
            <Suspense fallback={<Loading />}>
                  <App />
            </Suspense>
      ),
      children: [
            {
                  path: HOME_PATH.home.basic,
                  element: <Outlet />,
                  children: [
                        {
                              index: true,
                              element: <Home />,
                        },

                        {
                              path: SCHEDULE_PATH.schedule.basic,
                              element: (
                                    <CheckDynamicRouteListType
                                          params={[
                                                {
                                                      type: "number",
                                                      paramName: SCHEDULE_PATH.schedule.paramNameOne,
                                                },
                                                {
                                                      type: "number",
                                                      paramName: SCHEDULE_PATH.schedule.paramNameTwo,
                                                },
                                          ]}
                                    />
                              ),
                              children: [
                                    {
                                          index: true,
                                          element: <Schedule />,
                                    },
                                    {
                                          path: SCHEDULE_PATH.detail.basic,
                                          element: (
                                                <CheckDynamicRouteType
                                                      type="number"
                                                      paramName={SCHEDULE_PATH.detail.paramName}
                                                />
                                          ),
                                          children: [{ index: true, element: <ScheduleDetail /> }],
                                    },
                                    {
                                          path: "*",
                                          element: <NotFound />,
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
                              path: CONTACT_US_PATH.base.basic,
                              element: <ContactUs />,
                        },

                        {
                              path: NEWS_PATH.news.basic,
                              element: <Outlet />,
                              children: [
                                    {
                                          index: true,
                                          element: <News />,
                                    },

                                    {
                                          path: NEWS_PATH.newsDetail.basic,
                                          element: (
                                                <CheckDynamicRouteType
                                                      type="number"
                                                      paramName={NEWS_PATH.newsDetail.paramName}
                                                />
                                          ),
                                          children: [{ index: true, element: <NewsDetail /> }],
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

export default PublicRouter;
