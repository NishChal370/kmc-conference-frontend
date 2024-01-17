import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";
import { IAdminUserRoleChangeRequest, IUserPostRequest, IUserSearch } from "@/admin/model/user/userModel";

export const adminUserApi = {
      getUsers: (searchDetail: IUserSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Auth/registered-users?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },


      postUser: (newUser: IUserPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Auth/admin-register`,
                  data: newUser
            };

            return AXIOS.request(options);
      },


      putUserRole: (roleDetail: IAdminUserRoleChangeRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Auth/update-role`,
                  data: roleDetail
            };

            return AXIOS.request(options);
      }

}