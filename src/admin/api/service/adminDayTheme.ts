import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IDayThemeSearch } from "@/admin/model/dayTheme/dayThemeModel";

export const adminDayThemeApi = {
      getDayThemes: (searchDetail: IDayThemeSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Themes?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },
}