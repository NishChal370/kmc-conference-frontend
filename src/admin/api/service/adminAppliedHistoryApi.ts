import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IAppliedCallForPaperSessionDetailSearch, IAppliedCallForPaperScheduleDeleteReq, IAppliedParticipationDetailSearch, IAppliedParticipationScheduleDeleteReq, IAppliedSpeakerBasicPutRequest, IAppliedSpeakerSessionDetailSearch, IAppliedSpeakerScheduleDeleteReq, IAppliedCallForPaperPutRequest } from "@/admin/model/appliedHistory/appliedHistoryModel";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";

export const adminAppliedHistoryApi = {
      getApplicationSpeakerBasicInfo: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/my-speaker`,
            };

            return AXIOS.request(options);
      },

      getApplicationSpeakerSession: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ApplicationHistory/speaker`,
            };

            return AXIOS.request(options);
      },

      getApplicationSpeakerSessionDetail: ({ sessionId }: IAppliedSpeakerSessionDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/my-session?SessionId=${sessionId}`,
            };

            return AXIOS.request(options);
      },

      putAppliedSpeakerBasicInfo: (updatedDetail: IAppliedSpeakerBasicPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker`,
                  data: convertObjectToFormData(updatedDetail),
            };

            return AXIOS.request(options);
      },

      deleteAppliedSpeakerSchedule: (detail: IAppliedSpeakerScheduleDeleteReq) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Speaker/remove-session`,
                  data: detail,
            };

            return AXIOS.request(options);
      },




      getApplicationCallForPaperBasicInfo: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `CallForPaper/my-call`,
            };

            return AXIOS.request(options);
      },


      getApplicationCallForPaperSession: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `ApplicationHistory/call-for-paper`,
            };

            return AXIOS.request(options);
      },


      getApplicationCallForPaperSessionDetail: ({ sessionId }: IAppliedCallForPaperSessionDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `CallForPaper/my-sessions?SessionId=${sessionId}`,
            };

            return AXIOS.request(options);
      },

      putAppliedCallForPaperBasicInfo: (updatedDetail: IAppliedCallForPaperPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `CallForPaper`,
                  data: updatedDetail,
            };

            return AXIOS.request(options);
      },


      deleteAppliedCallForPaperSchedule: (detail: IAppliedCallForPaperScheduleDeleteReq) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `CallForPaper/remove-session`,
                  data: detail,
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


      deleteAppliedParticipationSchedule: (detail: IAppliedParticipationScheduleDeleteReq) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Participant/remove-session`,
                  data: detail,
            };

            return AXIOS.request(options);
      }
}