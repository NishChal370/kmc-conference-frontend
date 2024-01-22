import { Suspense } from "react";
import { RouteObject } from "react-router-dom";
import Loading from "@/shared/loading/Loading";
import { AuthRoute } from "@/protectedRoute";
import { Login, RegisterUser, ForgotPassword, ResetPassword, NotFound, VerifyEmail, AuthApp } from "./index";
import { AUTH_PATH } from "@/site/constants/routePath";

const AuthRouter: RouteObject = {
      path: AUTH_PATH.login.basic,
      element: <AuthRoute />,
      children: [
            {
                  element: (
                        <Suspense fallback={<Loading />}>
                              <AuthApp />
                        </Suspense>
                  ),
                  children: [
                        {
                              index: true,
                              element: <Login />,
                        },
                        {
                              path: AUTH_PATH.registerUser.basic,
                              element: <RegisterUser />,
                        },

                        {
                              path: AUTH_PATH.forgotPassword.basic,
                              element: <ForgotPassword />,
                        },

                        {
                              path: AUTH_PATH.restPassword.basic,
                              element: <ResetPassword />,
                        },

                        {
                              path: AUTH_PATH.verifyEmail.basic,
                              element: <VerifyEmail />,
                        },

                        {
                              path: "*",
                              element: <NotFound />,
                        },
                  ],
            },
            {
                  path: "profile",
                  element: <h1>Profile</h1>,
            },
      ],
};

export default AuthRouter;
