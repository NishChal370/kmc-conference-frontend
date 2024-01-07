import { useNavigate } from "react-router-dom";
import { useState } from "react";
import RegisterUserForm from "../components/RegisterUserForm";
import { IRegisterUserForm } from "@/model-normalUser/registerUser/registerUserModel";
import { useAppSelector } from "@/app/hooks";
import { registerUserState } from "../feature/registerUserSlice";
import { AUTH_PATH } from "@/constants/routePath/path-normalUser";

function RegisterUserFormContainer() {
      const navigate = useNavigate();

      const [allData, setAllData] = useState<IRegisterUserForm>();

      const { status } = useAppSelector(registerUserState);

      const submitFullForm = (data: any, isLastForm: () => boolean) => {
            const isFinalForm = isLastForm();

            if (!isFinalForm) {
                  setAllData((prev) => ({ ...prev, ...data }) as IRegisterUserForm);

                  return;
            }

            alert("DEmo Successful");
            navigate(AUTH_PATH.login.full);
            console.log(allData);
            // registerUser({ ...data, ...allData }).then(() => {
            //       navigate(AUTH_PATH.login.full);
            // });
      };

      return <RegisterUserForm status={status} submitFullForm={submitFullForm} />;
}

export default RegisterUserFormContainer;
