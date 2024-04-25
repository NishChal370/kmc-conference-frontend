import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IParticipantPostRequest, IParticipationNewSessionPostRequest } from "@/admin/model/participant/attendScheduleModel";
import { IAdminParticipantDeleteRequest, IParticipantBasicSearch, IParticipantByIdSearch } from "@/admin/model/participant/participantModel";
import { createQueryString } from "@/utils/stringFormat/createQueryString";

export const adminParticipantApi = {
      getBasicInfo: (searchDetail: IParticipantBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Participant${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },


      getParticipantDetailedById: ({ id }: IParticipantByIdSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Participant/${id}`,
            };

            return AXIOS.request(options);
      },

      deleteParticipantDetail: (deletingDetail: IAdminParticipantDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Participant`,
                  data: deletingDetail
            };

            return AXIOS.request(options);
      },


      postParticipation: (detail: IParticipantPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Participant`,
                  data: detail
            };

            return AXIOS.request(options);
      },

      postParticipationSession: (detail: IParticipationNewSessionPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Participant/add-session`,
                  data: detail
            };

            return AXIOS.request(options);
      }
}