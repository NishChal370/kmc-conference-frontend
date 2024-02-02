import { AxiosRequestConfig } from "axios";
import { IContactUsDeleteRequest, IContactUsPostRequest, IContactUsPutRequest, IContactUsSearch } from "@/admin/model/contactUs/contactUsModel";
import { createQueryString } from "@/utils/stringFormat/createQueryString";
import AXIOS from "@/api/constant";


export const contactUsApi = {
      get: (searchDetail: IContactUsSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ContactUs${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },

      post: (contactDetail: IContactUsPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `ContactUs`,
                  data: contactDetail,
            };

            return AXIOS.request(options);
      },

      put: (contactDetail: IContactUsPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `ContactUs`,
                  data: contactDetail,
            };

            return AXIOS.request(options);
      },

      delete: (contactDetail: IContactUsDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `ContactUs`,
                  data: contactDetail,
            };

            return AXIOS.request(options);
      },


}