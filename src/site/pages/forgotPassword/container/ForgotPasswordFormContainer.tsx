import useAppForm from "@/hooks/form/useAppForm";
import useForgotPasswordApi from "@/site/hooks/useForgotPasswordApi";
import { IForgotPasswordForm } from "@/site/model/forgotPassword/forgotPasswordModel";
import { useAppSelector } from "@/app/hooks";
import { forgotPasswordSliceState } from "../feature/forgotPasswordSlice";
import ForgotPasswordForm from "../components/ForgotPasswordForm";
import { Status } from "@/enum/commonEnum";

function ForgotPasswordFormContainer() {
      const form = useAppForm<IForgotPasswordForm>({
            defaultValues: {
                  email: "test@gmail.com",
            },
      });

      const { handleSubmit } = form;

      const { forgotPassword } = useForgotPasswordApi();

      const { status } = useAppSelector(forgotPasswordSliceState);

      const formSubmitHandler = handleSubmit((loginDetail) => {
            forgotPassword(loginDetail);
      });

      return (
            <ForgotPasswordForm
                  form={form}
                  isLoading={status === Status.LOADING}
                  formSubmitHandler={formSubmitHandler}
            />
      );
}

export default ForgotPasswordFormContainer;
