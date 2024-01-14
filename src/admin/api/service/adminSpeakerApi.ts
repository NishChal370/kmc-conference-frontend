import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";
import { IAdminSpeakerPutRequest, IAdminSpeakerStatusChangeReq, ISpeakerBasicSearch, ISpeakerByIdSearch, ISpeakerDeleteRequest } from "@/admin/model/speaker/adminSpeakerModel";

export const adminSpeakerApi = {
      getBasicInfo: (searchDetail: ISpeakerBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },


      getSpeakerDetailedById: ({ id }: ISpeakerByIdSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/${id}`,
            };

            return AXIOS.request(options);
      },

      putSpeakerDetailed: (speakerUpdateDetail: IAdminSpeakerPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker`,
                  data: convertObjectToFormData(speakerUpdateDetail)
            };


            return AXIOS.request(options);
      },


      putSpeakerApprovalStatus: (approvalDetail: IAdminSpeakerStatusChangeReq) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker/update-status`,
                  data: approvalDetail
            };


            return AXIOS.request(options);
      },

      deleteSpeakerDetail: (deletingDetail: ISpeakerDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Speaker`,
                  data: deletingDetail
            };


            return AXIOS.request(options);
      }
}