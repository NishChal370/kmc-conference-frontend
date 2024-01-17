import { useAppDispatch } from '@/app/hooks';
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from '@/utils/alert';
import { IChangePasswordRequest } from '@/admin/model/changePassword/changePasswordModel';
import { putAdminChangePassword } from '@/admin/pages/profileSetting/changePassword/feature/changePasswordRequest';

function useChangePasswordApi() {
      const dispatch = useAppDispatch();

      const updateChangePassword = async (callForPaperUpdateDetail: IChangePasswordRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAdminChangePassword(callForPaperUpdateDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "Password has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      return { updateChangePassword } as const;

}

export default useChangePasswordApi