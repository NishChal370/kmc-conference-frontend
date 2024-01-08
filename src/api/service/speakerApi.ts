import { AxiosRequestConfig } from "axios";
import AXIOS from "../constant";

export const speakerApi = {
      getBasicInfo: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker`,
            };


            return AXIOS.request(options);
      },
}