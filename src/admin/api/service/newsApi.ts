import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { createQueryString } from "@/utils/stringFormat/createQueryString";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";
import { INewsBasicSearch, INewsDeleteRequest, INewsDetailSearch, INewsPostRequest, INewsPutRequest } from "@/admin/model/news/newsModel";

export const newsApi = {
      getBasicInfo: (searchDetail: INewsBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `News${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },

      getDetailById: (searchDetail: INewsDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `News/${searchDetail.id}`,
            };

            return AXIOS.request(options);
      },

      postNews: (detail: INewsPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `News`,
                  data: convertObjectToFormData(detail)
            };

            return AXIOS.request(options);
      },

      putNews: (detail: INewsPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `News`,
                  data: convertObjectToFormData(detail)
            };

            return AXIOS.request(options);
      },

      deleteNews: (detail: INewsDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `News`,
                  data: detail,
            };

            return AXIOS.request(options);
      },
} as const; 