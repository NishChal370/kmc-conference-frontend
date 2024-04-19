import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";

export const applicantsStatisticApi = {
      get: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Dashboard`,
            };

            return AXIOS.request(options);
      },
}