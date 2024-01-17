import { useFormContext } from "react-hook-form";
import RegisterUserProfessionalForm from "../components/RegisterUserProfessionalForm";
import { IRegisterUserProfessionalForm } from "@/site/model/registerUser/registerUserModel";

interface IRegisterUserProfessionalFormContainer {
      slideToPrev: () => void;
      submitToParentHandler: (data: (keyof IRegisterUserProfessionalForm)[]) => void;
}

function RegisterUserProfessionalFormContainer({
      slideToPrev,
      submitToParentHandler,
}: IRegisterUserProfessionalFormContainer) {
      const registerUserProfessionalForm = useFormContext<IRegisterUserProfessionalForm>();

      const professionalFormSubmitHandler = (fields: (keyof IRegisterUserProfessionalForm)[]) => () => {
            submitToParentHandler(fields);
      };

      return (
            <RegisterUserProfessionalForm
                  slideToPrev={slideToPrev}
                  registerUserProfessionalForm={registerUserProfessionalForm}
                  professionalFormSubmitHandler={professionalFormSubmitHandler}
            />
      );
}

export default RegisterUserProfessionalFormContainer;
