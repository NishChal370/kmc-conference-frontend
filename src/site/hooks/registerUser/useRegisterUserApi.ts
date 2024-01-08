import { useAppDispatch } from "@/app/hooks";
import { postRegisterUser } from "@site/pages/registerUser/feature/registerUserRequest";
import { IRegisterUserPostRequest } from "@site/model/registerUser/registerUserModel";
import { errorToastMessage, loadingAlert, successMessage, swalAlertClose } from "@/utils/alert";

function useRegisterUserApi() {
      const dispatch = useAppDispatch();

      const registerUser = async (userDetail: IRegisterUserPostRequest) => {
            loadingAlert();

            await dispatch(postRegisterUser(userDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Register", message: "You have been registered. Use it while logging in." })
                  })
                  .catch(({ detail }) => {
                        errorToastMessage(detail);

                        throw new Error(detail);
                  })
                  .finally(swalAlertClose)
      }

      return { registerUser } as const;
}

export default useRegisterUserApi;