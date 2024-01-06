import { AxiosRequestConfig } from "axios";
import AXIOS from "../constant";
import { ILogin } from "@/model-normalUser/login/loginModel";
import { ITokenModel } from "@/models/auth/authModel";
import { IRegisterUserPostRequest } from "@/model-normalUser/registerUser/registerUserModel";

export const authApi = {
      login: (loginDetail: ILogin) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/login-user`,
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


      verifyLogin: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `auth/verify`,
            };

            return AXIOS.request(options);
      },

      logout: () => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/user-logout`,
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