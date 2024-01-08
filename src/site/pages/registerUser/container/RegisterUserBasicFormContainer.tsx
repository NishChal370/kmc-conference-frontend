import useAppForm from "@/hooks/form/useAppForm";
import RegisterUserBasicForm from "../components/RegisterUserBasicForm";
import { IRegisterUserBasicForm } from "@/site/model/registerUser/registerUserModel";

interface IRegisterUserBasicFormContainer {
      slideToNext: () => void;
      submitToParentHandler: (data: any) => void;
}
function RegisterUserBasicFormContainer({
      slideToNext,
      submitToParentHandler,
}: IRegisterUserBasicFormContainer) {
      const registerUserBasicForm = useAppForm<IRegisterUserBasicForm>();
      const { handleSubmit } = registerUserBasicForm;

      const formSubmitHandler = handleSubmit((data) => {
            submitToParentHandler(data);

            slideToNext();
      });

      return (
            <RegisterUserBasicForm
                  registerUserBasicForm={registerUserBasicForm}
                  basicFormSubmitHandler={formSubmitHandler}
            />
      );
}

export default RegisterUserBasicFormContainer;
