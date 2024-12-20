import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { createQueryString } from "@/utils/stringFormat/createQueryString";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";
import { ISpeakerContentDetailSearch, ISpeakerContentSearch } from "@/admin/model/speaker/speakerContentModel";
import { ISpeakerNewSessionPostRequest, ISpeakerPostRequest } from "@/admin/model/speaker/becomeSpeakerModel";
import { ISpeakerApplicationBasicPutRequest, ISpeakerBasicSearch, ISpeakerByIdSearch, ISpeakerDeleteRequest } from "@/admin/model/speaker/speakerModel";

const speakerApi = {
      getBasicInfo: (searchDetail: ISpeakerBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker${createQueryString(searchDetail)}`,
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

      putSpeakerApplicationBasicInfo: (updatedDetail: ISpeakerApplicationBasicPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker/by-admin`,
                  data: convertObjectToFormData(updatedDetail),
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
                  method: "PUT",
                  url: `Speaker/add-session`,
                  data: convertObjectToFormData(sessionDetail),
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


      getSpeakersContent: (searchDetail: ISpeakerContentSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/content${createQueryString(searchDetail)}`,
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
} as const;


export default speakerApi;