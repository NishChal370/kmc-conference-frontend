import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";
import { IAdminUserRoleChangeRequest, IAdminUserStatusChangeRequest, IUserPostRequest, IUserSearch } from "@/admin/model/user/userModel";
import { UserStatus } from "@/enum/user/userEnum";

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
      },

      putUserStatus: (userStatusDetail: IAdminUserStatusChangeRequest) => {
            let url = "";

            switch (userStatusDetail.userStatus) {
                  case UserStatus.ACTIVE:
                        url = `Admin/activate-user`
                        break;
                  case UserStatus.BLOCKED:
                        url = `Admin/block-user`
                        break;
                  default:
                        url = ""
                        break;
            }

            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Admin/${url}`,
                  data: { userId: userStatusDetail.userId }
            };

            return AXIOS.request(options);
      }

}