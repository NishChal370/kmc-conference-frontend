import ChangePassword from "../ChangePassword";
import useAppForm from "@/hooks/form/useAppForm";
import { IChangePasswordForm } from "@/admin/model/changePassword/changePasswordModel";
import useChangePasswordApi from "@/admin/hooks/changePassword/useChangePasswordApi";

function ChangePasswordContainer() {
      const changePasswordForm = useAppForm<IChangePasswordForm>();
      const { handleSubmit, reset } = changePasswordForm;

      const { updateChangePassword } = useChangePasswordApi();

      const formSubmitHandler = handleSubmit((passwordDetail) => {
            updateChangePassword(passwordDetail).then(() => {
                  reset();
            });
      });

      return <ChangePassword changePasswordForm={changePasswordForm} formSubmitHandler={formSubmitHandler} />;
}

export default ChangePasswordContainer;
