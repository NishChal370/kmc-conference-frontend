import { useAppDispatch } from "@/app/hooks";
import { IUserPostRequest, IUserSearch } from "@/admin/model/user/userModel";
import { getUsers as getUsersReq, postUser } from "@/admin/pages/user/feature/userRequest";
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


      return { getUsers, addUserDetail } as const;
}

export default useUserApi;