import { useNavigate } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import RegisterUserForm from "../components/RegisterUserForm";
import useRegisterUserApi from "@/site/hooks/registerUser/useRegisterUserApi";
import { IRegisterUserForm } from "@/site/model/registerUser/registerUserModel";
import { useAppSelector } from "@/app/hooks";
import { AUTH_PATH } from "@/site/constants/routePath";
import { registerUserState } from "../feature/registerUserSlice";

function RegisterUserFormContainer() {
      const navigate = useNavigate();

      const methods = useForm<IRegisterUserForm>();
      const { handleSubmit, trigger } = methods;

      const { registerUser } = useRegisterUserApi();

      const { status } = useAppSelector(registerUserState);

      const partialSubmitHandler = async (fields: any) => {
            const result = await trigger(fields);

            if (!result) throw new Error("Error in submitted fields " + fields);
      };

      const formSubmitHandler = handleSubmit((registrationData) => {
            registerUser(registrationData).then(() => {
                  navigate(AUTH_PATH.login.full);
            });
      });

      return (
            <FormProvider {...methods}>
                  <RegisterUserForm
                        status={status}
                        submitFullForm={formSubmitHandler}
                        partialSubmitHandler={partialSubmitHandler}
                  />
            </FormProvider>
      );
}

export default RegisterUserFormContainer;
