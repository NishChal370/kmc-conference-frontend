import { useAppDispatch } from "@/app/hooks";
import { IAdminProfilePutRequest } from "@/admin/model/profile/adminProfileModel";
import { getAdminProfile as getAdminProfileReq, putAdminProfile } from "@/admin/pages/profileSetting/profile/feature/profileRequest";
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from "@/utils/alert";

function useAdminProfileApi() {
      const dispatch = useAppDispatch();

      const getAdminProfile = () => {
            dispatch(getAdminProfileReq())
      }


      const updateAdminProfile = async (adminProfileDetail: IAdminProfilePutRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putAdminProfile(adminProfileDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "User detail has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      return { getAdminProfile, updateAdminProfile } as const;

}


export default useAdminProfileApi;