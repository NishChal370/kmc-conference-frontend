import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IChangePasswordRequest } from "@/admin/model/changePassword/changePasswordModel";

export const adminChangePasswordApi = {
      putChangePassword: (passwordDetail: IChangePasswordRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `change-password`,
                  data: passwordDetail,
            };

            return AXIOS.request(options);
      },
}