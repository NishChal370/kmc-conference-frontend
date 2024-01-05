import { AxiosRequestConfig } from "axios";
import appAxios from "../constant";
import { ILogin } from "@/model-normalUser/login/loginModel";
import { IRegisterUserPostRequest } from "@/model-normalUser/registerUser/registerUserModel";

export const authApi = {
      login: (loginDetail: ILogin) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/login-user`,
                  data: loginDetail,
            };


            return appAxios.request(options);
      },

      registerUser: (userDetail: IRegisterUserPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/user-register`,
                  data: userDetail,
            };


            return appAxios.request(options);
      },
}