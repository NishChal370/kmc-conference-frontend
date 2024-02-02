import useVerifyEmailApi from "@/site/hooks/verifyEmail/useVerifyEmailApi";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ErrorMessage } from "@/shared/errorMessage";
import Button from "@/shared/button/Button";
import { useAppSelector } from "@/app/hooks";
import { verifyEmailSliceState } from "../feature/verifyEmailSlice";
import { Status } from "@/enum/commonEnum";
import VerifyLoading from "../components/VerifyLoading";
import { useEffect } from "react";
import { AUTH_PATH } from "@/site/constants/routePath";

function VerifyEmailContainer() {
      const navigate = useNavigate();
      const [searchParamState] = useSearchParams();

      const { status, error } = useAppSelector(verifyEmailSliceState);

      const { verifyEmail } = useVerifyEmailApi();

      const fetchVerifyEmail = () => {
            const userId = decodeURIComponent(searchParamState.get("id") || "");
            const verifyToken = decodeURIComponent(searchParamState.get("token") || "");

            verifyEmail({ userId: userId, token: verifyToken }).then(() => {
                  navigateToLoggedIn();
            });
      };

      const navigateToLoggedIn = () => {
            navigate(AUTH_PATH.login.full);
      };

      const navigateToForgotPassword = () => {
            navigate(AUTH_PATH.forgotPassword.full);
      };

      useEffect(() => {
            fetchVerifyEmail();
      }, []);

      return (
            <>
                  {status === Status.FAILED && (
                        <span className="flex flex-col gap-16">
                              <ErrorMessage
                                    needTopPadding={false}
                                    title="Failed to Verify Email Address"
                                    detail={error?.detail || "something went wrong"}
                                    traceId={error?.traceId}
                              />

                              {error?.detail.includes("already confirmed") ? (
                                    <Button
                                          type="button"
                                          title="Proceed Login"
                                          onClickHandler={navigateToLoggedIn}
                                    />
                              ) : (
                                    <Button
                                          type="button"
                                          title="Reset Password"
                                          onClickHandler={navigateToForgotPassword}
                                    />
                              )}
                        </span>
                  )}

                  {status === Status.LOADING && <VerifyLoading />}
            </>
      );
}

export default VerifyEmailContainer;
