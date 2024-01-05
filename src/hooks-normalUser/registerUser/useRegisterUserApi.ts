import { useAppDispatch } from "@/app/hooks";
import { postRegisterUser } from "@/pages-normalUser/registerUser/feature/registerUserRequest";
import { IRegisterUserPostRequest } from "@/model-normalUser/registerUser/registerUserModel";
import { errorToastMessage, loadingAlert, successMessage, swalAlertClose } from "@/utils/alert";

function useRegisterUserApi() {
      const dispatch = useAppDispatch();

      const registerUser = (userDetail: IRegisterUserPostRequest) => {
            loadingAlert();

            dispatch(postRegisterUser(userDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Register", message: "You have been registered. Use it while logging in." })
                  })
                  .catch(({ detail }) => {
                        errorToastMessage(detail);
                  })
                  .finally(swalAlertClose)
      }

      return { registerUser } as const;
}

export default useRegisterUserApi;