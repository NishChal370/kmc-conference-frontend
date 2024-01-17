import { useFormContext } from "react-hook-form";
import RegisterUserPasswordForm from "../components/RegisterUserPasswordForm";
import { IRegisterUserPasswordForm } from "@/site/model/registerUser/registerUserModel";

interface IRegisterUserPasswordFormContainer {
      slideToPrevious: () => void;
}

function RegisterUserPasswordFormContainer({ slideToPrevious }: IRegisterUserPasswordFormContainer) {
      const registerUserPasswordForm = useFormContext<IRegisterUserPasswordForm>();

      return (
            <RegisterUserPasswordForm
                  registerUserPasswordForm={registerUserPasswordForm}
                  previousButtonHandler={slideToPrevious}
            />
      );
}

export default RegisterUserPasswordFormContainer;
