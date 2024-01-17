import AXIOS from "@/api/constant";
import { AxiosRequestConfig } from "axios";

export const adminAppliedHistoryApi = {
      getApplicationSpeaker: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ApplicationHistory/speaker`,
            };

            return AXIOS.request(options);
      },

      getApplicationCallForPaper: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ApplicationHistory/callForPaper`,
            };

            return AXIOS.request(options);
      },



      getApplicationParticipant: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ApplicationHistory/participant`,
            };

            return AXIOS.request(options);
      },

}