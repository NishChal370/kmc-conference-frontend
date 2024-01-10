import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import convertObjectToFormData from "@/utils/objectFormat/convertObjectToFormData";
import { IAdminSpeakerPutRequest, IAdminSpeakerFullDetailedInfoById, IAdminSpeakerBasicInfoSearch } from "@/admin/model/speaker/adminSpeakerModel";

export const adminSpeakerApi = {
      getBasicInfo: (searchDetail: IAdminSpeakerBasicInfoSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker?pageNumber=${searchDetail.pageNumber}`,
            };


            return AXIOS.request(options);
      },


      getSpeakerFullDetailedInfoById: ({ speakerId }: IAdminSpeakerFullDetailedInfoById) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/${speakerId}`,
            };

            return AXIOS.request(options);
      },

      putSpeakerDetail: (speakerUpdateDetail: IAdminSpeakerPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker`,
                  data: convertObjectToFormData(speakerUpdateDetail)
            };


            return AXIOS.request(options);
      },
}