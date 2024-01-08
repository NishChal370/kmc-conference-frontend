import { useAppDispatch } from "@/app/hooks";
import { Status } from "@/enum/commonEnum";
import { ILogin } from "@/site/model/login/loginModel";
import { postLogin } from "@/site/pages/login/feature/loginRequest";
import { changeVerifyLoginStatus } from "@/protectedRoute/feature/verifyLoginSlice";
import { errorToastMessage, loadingAlert, swalAlertClose } from "@/utils/alert";

function useLoginApi() {
      const dispatch = useAppDispatch();

      const login = (loginDetail: ILogin) => {
            loadingAlert();

            dispatch(postLogin(loginDetail))
                  .unwrap()
                  .then(() => {
                        dispatch(changeVerifyLoginStatus(Status.SUCCEEDED))
                  })
                  .catch(({ detail }) => {
                        errorToastMessage(detail);
                  })
                  .finally(swalAlertClose)
      }

      return { login } as const;
}

export default useLoginApi;