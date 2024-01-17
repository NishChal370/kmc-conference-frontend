import { useFormContext } from "react-hook-form";
import RegisterUserBasicForm from "../components/RegisterUserBasicForm";
import { IRegisterUserBasicForm } from "@/site/model/registerUser/registerUserModel";

interface IRegisterUserBasicFormContainer {
      submitToParentHandler: (fields: (keyof IRegisterUserBasicForm)[]) => void;
}
function RegisterUserBasicFormContainer({ submitToParentHandler }: IRegisterUserBasicFormContainer) {
      const registerUserBasicForm = useFormContext<IRegisterUserBasicForm>();

      const basicFormSubmitHandler = (fields: (keyof IRegisterUserBasicForm)[]) => () => {
            submitToParentHandler(fields);
      };

      return (
            <RegisterUserBasicForm
                  registerUserBasicForm={registerUserBasicForm}
                  basicFormSubmitHandler={basicFormSubmitHandler}
            />
      );
}

export default RegisterUserBasicFormContainer;
