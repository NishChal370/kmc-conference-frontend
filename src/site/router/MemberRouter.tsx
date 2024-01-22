import { Suspense } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import {
      App,
      MemberProfileSetting,
      NotFound,
      AppliedCallForPaper,
      AppliedParticipation,
      AppliedSpeaking,
      ChangePasswordContainer,
      Profile,
} from "./index";
import Loading from "@/shared/loading/Loading";
import { MemberRoute } from "@/protectedRoute";
import { MEMBER_PATH } from "../constants/routePath";

const MemberRouter: RouteObject = {
      path: MEMBER_PATH.base.basic,
      element: <MemberRoute />,
      children: [
            {
                  element: (
                        <Suspense fallback={<Loading />}>
                              <App />
                        </Suspense>
                  ),
                  children: [
                        {
                              path: "",
                              element: <MemberProfileSetting />,
                              children: [
                                    {
                                          index: true,
                                          element: <Navigate to={MEMBER_PATH.profileSetting.basic} replace />,
                                    },
                                    {
                                          path: MEMBER_PATH.profileSetting.basic,
                                          element: <Profile />,
                                    },
                                    {
                                          path: MEMBER_PATH.changePassword.basic,
                                          element: <ChangePasswordContainer />,
                                    },
                                    {
                                          path: MEMBER_PATH.appliedSpeaking.basic,
                                          element: <AppliedSpeaking />,
                                    },
                                    {
                                          path: MEMBER_PATH.appliedCallForPaper.basic,
                                          element: <AppliedCallForPaper />,
                                    },
                                    {
                                          path: MEMBER_PATH.appliedParticipation.basic,
                                          element: <AppliedParticipation />,
                                    },
                                    {
                                          path: "*",
                                          element: <NotFound />,
                                    },
                              ],
                        },
                  ],
            },
      ],
};

export default MemberRouter;
