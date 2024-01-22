import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IAppliedCallForPaperDetailSearch, IAppliedParticipationDetailSearch, IAppliedSpeakerDetailSearch } from "@/admin/model/appliedHistory/appliedHistoryModel";

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
                  url: `ApplicationHistory/call-for-paper`,
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
                  url: `Participant/my-participant?SessionId=${sessionId}`,
            };

            return AXIOS.request(options);
      },


      getApplicationSpeakerDetail: ({ sessionId }: IAppliedSpeakerDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/my-speaker?SessionId=${sessionId}`,
            };

            return AXIOS.request(options);
      },

      getApplicationCallForPaperDetail: ({ sessionId }: IAppliedCallForPaperDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `CallForPaper/my-calls?SessionId=${sessionId}`,
            };

            return AXIOS.request(options);
      },


}