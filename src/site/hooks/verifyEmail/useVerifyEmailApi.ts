import { useAppDispatch } from '@/app/hooks';
import { IVerifyEmailRequest } from '@/site/model/verifyEmail/verifyEmailModel';
import { postVerifyEmail } from '@/site/pages/verifyEmail/feature/verifyEmailRequest';
import { loadingAlert, successMessage, swalAlertClose } from '@/utils/alert';

function useVerifyEmailApi() {
      const dispatch = useAppDispatch();

      const verifyEmail = async (detail: IVerifyEmailRequest) => {
            loadingAlert();

            await dispatch(postVerifyEmail(detail))
                  .unwrap()
                  .then(() => {
                        successMessage({
                              message: "Your email has been verified try logging in.",
                              title: "Email verified"
                        })

                  })
                  .catch(({ detail }) => {

                        throw new Error(detail)
                  })
                  .finally(swalAlertClose)
      }

      return { verifyEmail } as const;
}

export default useVerifyEmailApi