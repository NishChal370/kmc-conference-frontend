import { useState } from "react";
import RegisterUserForm from "../components/RegisterUserForm";
import useRegisterUserApi from "@/hooks-normalUser/registerUser/useRegisterUserApi";
import { IRegisterUserForm } from "@/model-normalUser/registerUser/registerUserModel";
import { useAppSelector } from "@/app/hooks";
import { registerUserState } from "../feature/registerUserSlice";

function RegisterUserFormContainer() {
      const [allData, setAllData] = useState<IRegisterUserForm>();

      const { registerUser } = useRegisterUserApi();

      const { status } = useAppSelector(registerUserState);

      const submitFullForm = (data: any, isLastForm: () => boolean) => {
            const isFinalForm = isLastForm();

            if (!isFinalForm) {
                  setAllData((prev) => ({ ...prev, ...data }) as IRegisterUserForm);

                  return;
            }

            registerUser({ ...data, ...allData });
      };

      return <RegisterUserForm status={status} submitFullForm={submitFullForm} />;
}

export default RegisterUserFormContainer;
