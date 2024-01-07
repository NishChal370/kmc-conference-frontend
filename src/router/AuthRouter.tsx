import { Suspense } from "react";
import { Outlet, RouteObject } from "react-router-dom";
import { AUTH_PATH } from "@/constants/routePath/path-normalUser";
import AuthApp from "@/AuthApp";
import { Login, RegisterUser } from "./index";

const AuthRouter: RouteObject = {
      path: AUTH_PATH.login.basic,
      element: <Outlet />,
      children: [
            {
                  element: (
                        <Suspense fallback={<h1>loading Suspense....</h1>}>
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
                              path: "*",
                              element: <h1>Not found from auth</h1>,
                        },
                  ],
            },
      ],
};

export default AuthRouter;
