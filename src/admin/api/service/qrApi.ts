import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";

export const qrApi = {
      get: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Qr`,
            };

            return AXIOS.request(options);
      },
}