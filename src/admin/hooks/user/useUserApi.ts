import { useAppDispatch } from "@/app/hooks";
import { IUserSearch } from "@/admin/model/user/userModel";
import { getUsers as getUsersReq } from "@/admin/pages/user/feature/userRequest";

function useUserApi() {
      const dispatch = useAppDispatch();

      const getUsers = (searchDetail: IUserSearch) => {
            dispatch(getUsersReq(searchDetail))
      }

      return { getUsers } as const;
}

export default useUserApi;