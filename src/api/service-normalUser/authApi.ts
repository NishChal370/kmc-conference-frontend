import { AxiosRequestConfig } from "axios";
import AXIOS from "../constant";
import { ILogin } from "@/model-normalUser/login/loginModel";
import { ITokenModel } from "@/models/auth/authModel";
import { IRegisterUserPostRequest } from "@/model-normalUser/registerUser/registerUserModel";

export const authApi = {
      login: (loginDetail: ILogin) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Auth/login-user`,
                  data: loginDetail,
            };


            return AXIOS.request(options);
      },

      refreshToken: (oldToken: ITokenModel) => {
            const options = {
                  method: "POST",
                  url: `auth/refresh-token`,
                  data: oldToken,
            };

            return AXIOS.request(options);
      },

      registerUser: (userDetail: IRegisterUserPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/user-register`,
                  data: userDetail,
            };


            return AXIOS.request(options);
      },
}