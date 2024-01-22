import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAppForm from "@/hooks/form/useAppForm";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { IResetPasswordForm } from "@/site/model/resetPassword/resetPasswordModel";
import useResetPasswordApi from "@/site/hooks/resetPassword/useResetPasswordApi";
import { resetPasswordSliceAction, resetPasswordSliceState } from "../feature/resetPasswordSlice";
import { AUTH_PATH } from "@/site/constants/routePath";
import ResetPasswordForm from "../component/ResetPasswordForm";
import { Status } from "@/enum/commonEnum";

function ResetPasswordFromContainer() {
      const navigate = useNavigate();
      const dispatch = useAppDispatch();
      const [searchParamState] = useSearchParams();

      const form = useAppForm<IResetPasswordForm>();
      const { handleSubmit } = form;

      const { resetPassword } = useResetPasswordApi();
      const { status } = useAppSelector(resetPasswordSliceState);

      const formSubmitHandler = handleSubmit((resetDetail: IResetPasswordForm) => {
            const userId = decodeURIComponent(searchParamState.get("id") || "");
            const resetToken = decodeURIComponent(searchParamState.get("token") || "");

            resetPassword({ token: resetToken, userId: userId || "", ...resetDetail }).then(() => {
                  navigate(AUTH_PATH.login.full);
            });
      });

      useEffect(() => {
            return () => {
                  dispatch(resetPasswordSliceAction.resetSlice());
            };
      }, []);

      return (
            <ResetPasswordForm
                  form={form}
                  formSubmitHandler={formSubmitHandler}
                  isLoading={status === Status.LOADING}
            />
      );
}

export default ResetPasswordFromContainer;
