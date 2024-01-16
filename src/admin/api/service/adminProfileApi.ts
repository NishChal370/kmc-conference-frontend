import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IAdminProfilePutRequest } from "@/admin/model/profile/adminProfileModel";

export const adminProfileApi = {
      getLoggedInProfile: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Auth/my-info`,
            };

            return AXIOS.request(options);
      },


      putLoggedInProfile: (profileDetail: IAdminProfilePutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Auth/update-user`,
                  data: profileDetail
            };

            return AXIOS.request(options);
      },
}