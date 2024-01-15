import { IUserSearch } from "@/admin/model/user/userModel";
import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";

export const adminUserApi = {
      getUsers: (searchDetail: IUserSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Auth/registered-users?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },
}