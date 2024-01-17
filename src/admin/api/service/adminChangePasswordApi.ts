import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IChangePasswordRequest } from "@/admin/model/changePassword/changePasswordModel";

export const adminChangePasswordApi = {
      putChangePassword: (passwordDetail: IChangePasswordRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Auth/change-password`,
                  data: passwordDetail,
            };

            return AXIOS.request(options);
      },
}