import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IAdminParticipantDeleteRequest, IParticipantBasicSearch, IParticipantByIdSearch } from "@/admin/model/participant/participantModel";

export const adminParticipantApi = {
      getBasicInfo: (searchDetail: IParticipantBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Participant?pageNumber=${searchDetail.pageNumber}`,
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
      }
}