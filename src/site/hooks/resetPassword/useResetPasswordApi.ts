import { useAppDispatch } from '@/app/hooks';
import { IResetPasswordRequest } from '@/site/model/resetPassword/resetPasswordModel';
import { postResetPassword } from '@/site/pages/resetPassword/feature/resetPasswordRequest';
import { errorToastMessage, loadingAlert, successMessage, swalAlertClose } from '@/utils/alert';

function useResetPasswordApi() {
      const dispatch = useAppDispatch();

      const resetPassword = async (detail: IResetPasswordRequest) => {
            loadingAlert();

            await dispatch(postResetPassword(detail))
                  .unwrap()
                  .then(() => {
                        successMessage({
                              message: "Your password has been set. Use it while logging in.",
                              title: "Password reset"
                        })

                  })
                  .catch(({ detail }) => {
                        errorToastMessage(detail);

                        throw new Error(detail)
                  })
                  .finally(swalAlertClose)
      }

      return { resetPassword } as const;
}

export default useResetPasswordApi