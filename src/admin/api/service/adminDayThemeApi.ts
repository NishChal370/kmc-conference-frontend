import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IDayThemeByIdSearch, IDayThemeDeleteRequest, IDayThemeMinSearch, IDayThemePostRequest, IDayThemePutRequest, IDayThemeSearch } from "@/admin/model/dayTheme/dayThemeModel";
import { createQueryString } from "@/utils/stringFormat/createQueryString";

export const adminDayThemeApi = {
      getDayThemes: (searchDetail: IDayThemeSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Themes${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },


      getDayThemeById: (searchDetail: IDayThemeByIdSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Themes/${searchDetail.themeId}`,
            };

            return AXIOS.request(options);
      },

      getDayThemesMin: ({ dayId }: IDayThemeMinSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Themes/min${createQueryString({ dayId })}`,
            };

            return AXIOS.request(options);
      },


      postDayTheme: (dayThemeDetail: IDayThemePostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Themes`,
                  data: dayThemeDetail
            };

            return AXIOS.request(options);
      },

      putDayTheme: (dayThemeDetail: IDayThemePutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Themes`,
                  data: dayThemeDetail
            };

            return AXIOS.request(options);
      },

      deleteDayTheme: (dayThemeDetail: IDayThemeDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Themes`,
                  data: dayThemeDetail
            };

            return AXIOS.request(options);
      },

}