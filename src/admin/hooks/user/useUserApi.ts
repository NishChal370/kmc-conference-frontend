import { useAppDispatch } from "@/app/hooks";
import { IAdminUserRoleChangeRequest, IAdminUserStatusChangeRequest, IUserPostRequest, IUserSearch } from "@/admin/model/user/userModel";
import { getUsers as getUsersReq, postUser, putUserRole, putUserStatus } from "@/admin/pages/user/feature/userRequest";
import { errorToastMessage, loadingAlertWithMessage, successMessage, swalAlertClose } from "@/utils/alert";

function useUserApi() {
      const dispatch = useAppDispatch();

      const getUsers = (searchDetail: IUserSearch) => {
            dispatch(getUsersReq(searchDetail))
      }


      const addUserDetail = async (newUser: IUserPostRequest) => {
            loadingAlertWithMessage();

            await dispatch(postUser(newUser))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Success", message: "New User has been created." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);

                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      const updateUserRole = async (roleDetail: IAdminUserRoleChangeRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putUserRole(roleDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "User role has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }

      const updateUserStatus = async (userStatusDetail: IAdminUserStatusChangeRequest) => {
            loadingAlertWithMessage({ title: "Updating", text: "Please wait while updating" });

            await dispatch(putUserStatus(userStatusDetail))
                  .unwrap()
                  .then(() => {
                        successMessage({ title: "Updated", message: "User status has been updated." });
                  })
                  .catch((error) => {
                        errorToastMessage(error.detail);


                        throw new Error(error);
                  })
                  .finally(swalAlertClose)
      }


      return { getUsers, addUserDetail, updateUserRole, updateUserStatus } as const;
}

export default useUserApi;