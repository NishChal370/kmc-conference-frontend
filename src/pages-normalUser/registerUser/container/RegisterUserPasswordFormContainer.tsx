import useAppForm from "@/hooks/form/useAppForm";
import RegisterUserPasswordForm from "../components/RegisterUserPasswordForm";
import { IRegisterUserPasswordForm } from "@/model-normalUser/registerUser/registerUserModel";

interface IRegisterUserPasswordFormContainer {
      slideToPrevious: () => void;
      submitToParentHandler: (data: any) => void;
}

function RegisterUserPasswordFormContainer({
      slideToPrevious,
      submitToParentHandler,
}: IRegisterUserPasswordFormContainer) {
      const registerUserPasswordForm = useAppForm<IRegisterUserPasswordForm>();
      const { handleSubmit } = registerUserPasswordForm;

      const formSubmitHandler = handleSubmit((data) => {
            submitToParentHandler(data);

            // slideToPrevious();
      });
      return (
            <RegisterUserPasswordForm
                  registerUserPasswordForm={registerUserPasswordForm}
                  passwordFormSubmitHandler={formSubmitHandler}
                  previousButtonHandler={slideToPrevious}
            />
      );
}

export default RegisterUserPasswordFormContainer;
