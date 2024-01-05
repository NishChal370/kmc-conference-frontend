import { useState } from "react";
import RegisterUserForm from "../components/RegisterUserForm";
import useRegisterUserApi from "@/hooks-normalUser/registerUser/useRegisterUserApi";
import { IRegisterUserForm } from "@/model-normalUser/registerUser/registerUserModel";

function RegisterUserFormContainer() {
      const [allData, setAllData] = useState<IRegisterUserForm>();

      const { registerUser } = useRegisterUserApi();

      const submitFullForm = (data: any, isLastForm: () => boolean) => {
            const isFinalForm = isLastForm();

            if (!isFinalForm) {
                  setAllData((prev) => ({ ...prev, ...data }) as IRegisterUserForm);

                  return;
            }

            registerUser({ ...data, ...allData });
      };

      return <RegisterUserForm submitFullForm={submitFullForm} />;
}

export default RegisterUserFormContainer;
