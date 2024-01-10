import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IConferenceDayPutRequest, IConferenceDaySearch } from "@/admin/model/conferenceDay/conferenceDayModel";

export const adminConferenceDayApi = {
      getDayDetail: (searchDetail: IConferenceDaySearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Days?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },


      putDayDetail: (conferenceDayDetail: IConferenceDayPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Days`,
                  data: conferenceDayDetail
            };

            return AXIOS.request(options);
      },
}