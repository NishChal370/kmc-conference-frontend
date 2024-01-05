import { useAppDispatch } from "@/app/hooks";
import { ILogin } from "@/model-normalUser/login/loginModel";
import { postLogin } from "@/pages-normalUser/login/feature/loginRequest";
import { errorToastMessage, loadingAlert, swalAlertClose } from "@/utils/alert";

function useLoginApi() {
      const dispatch = useAppDispatch();

      const login = (loginDetail: ILogin) => {
            loadingAlert();

            dispatch(postLogin(loginDetail))
                  .unwrap()
                  .catch(({ detail }) => {
                        errorToastMessage(detail);
                  })
                  .finally(swalAlertClose)
      }

      return { login } as const;
}

export default useLoginApi;