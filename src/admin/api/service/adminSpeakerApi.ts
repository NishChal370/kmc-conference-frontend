import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";
import { ISpeakerContentDetailSearch } from "@/admin/model/speaker/speakerContentModel";
import { ISpeakerPutRequest, ISpeakerStatusChangeReq, ISpeakerBasicSearch, ISpeakerByIdSearch, ISpeakerDeleteRequest, ISpeakerNewSessionPostRequest, ISpeakerPostRequest } from "@/admin/model/speaker/speakerModel";

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

      putSpeakerDetailed: (speakerUpdateDetail: ISpeakerPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker`,
                  data: convertObjectToFormData(speakerUpdateDetail)
            };


            return AXIOS.request(options);
      },


      postSpeakerDetail: (detail: ISpeakerPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Speaker`,
                  data: convertObjectToFormData(detail)
            };

            return AXIOS.request(options);
      },


      postSpeakerNewSession: (sessionDetail: ISpeakerNewSessionPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Speaker/add-session`,
                  data: sessionDetail,
            };


            return AXIOS.request(options);
      },


      putSpeakerApprovalStatus: (approvalDetail: ISpeakerStatusChangeReq) => {
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
      },


      getSpeakersContent: () => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/content`,
            };

            return AXIOS.request(options);
      },

      getSpeakerContentDetail: ({ id }: ISpeakerContentDetailSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/content/${id}`,
            };

            return AXIOS.request(options);
      },
}