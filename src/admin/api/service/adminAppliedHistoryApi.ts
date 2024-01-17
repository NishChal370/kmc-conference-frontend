import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IAppliedParticipationDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

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

      getApplicationParticipationDetail: ({ sessionId }: IAppliedParticipationDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ApplicationHistory/participant/sessionId=${sessionId}`,
            };

            return AXIOS.request(options);
      },


}