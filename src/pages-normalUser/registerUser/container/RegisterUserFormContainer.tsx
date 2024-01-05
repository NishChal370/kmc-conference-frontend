import RegisterUserForm from "../components/RegisterUserForm";
import useAppForm from "@/hooks/form/useAppForm";
import useRegisterUserApi from "@/hooks-normalUser/registerUser/useRegisterUserApi";
import { IRegisterUserForm } from "@/model-normalUser/registerUser/registerUserModel";

function RegisterUserFormContainer() {
      const registerUserForm = useAppForm<IRegisterUserForm>();
      const { handleSubmit } = registerUserForm;

      const { registerUser } = useRegisterUserApi();

      const formSubmitHandler = handleSubmit((data) => {
            registerUser(data);
      });

      return <RegisterUserForm registerUserForm={registerUserForm} formSubmitHandler={formSubmitHandler} />;
}

export default RegisterUserFormContainer;
