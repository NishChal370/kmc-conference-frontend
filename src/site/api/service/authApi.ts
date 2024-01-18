import { AxiosRequestConfig } from "axios";
import AXIOS from "../../../api/constant";
import { ITokenModel } from "@/models/auth/authModel";
import { ILogin } from "@/site/model/login/loginModel";
import { IRegisterUserPostRequest } from "@/site/model/registerUser/registerUserModel";
import { IForgotPasswordRequest } from "@/site/model/forgotPassword/forgotPasswordModel";

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
                  url: `auth/logout`,
                  data: {} //Backend requirement
            };

            return AXIOS.request(options);
      },


      forgotPassword: (detail: IForgotPasswordRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `auth/forget-password`,
                  data: detail,
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