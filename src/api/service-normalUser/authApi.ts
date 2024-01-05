import { AxiosRequestConfig } from "axios";
import appAxios from "../constant";
import { IRegisterUserPostRequest } from "@/model-normalUser/registerUser/registerUserModel";

export const authApi = {
      registerUser: (userDetail: IRegisterUserPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/user-register`,
                  data: userDetail,
            };


            return appAxios.request(options);
      },
}