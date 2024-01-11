import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IDayThemeSearch } from "@/admin/model/dayTheme/dayThemeModel";
import { createQueryString } from "@/utils/stringFormat/createQueryString";

export const adminDayThemeApi = {
      getDayThemes: (searchDetail: IDayThemeSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Themes${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },
}