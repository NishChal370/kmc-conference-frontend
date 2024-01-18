import { useAppDispatch } from '@/app/hooks';
import { IForgotPasswordRequest } from '../model/forgotPassword/forgotPasswordModel';
import { errorToastMessage, loadingAlert, swalAlertClose } from '@/utils/alert';
import { postForgotPassword } from '../pages/forgotPassword/feature/forgotPasswordRequest';

function useForgotPasswordApi() {
      const dispatch = useAppDispatch();

      const forgotPassword = (detail: IForgotPasswordRequest) => {
            loadingAlert();

            dispatch(postForgotPassword(detail))
                  .unwrap()
                  .catch(({ detail }) => {
                        errorToastMessage(detail);
                  })
                  .finally(swalAlertClose)
      }

      return { forgotPassword } as const;
}

export default useForgotPasswordApi