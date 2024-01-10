import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { IConferenceDaySearch } from "@/admin/model/conferenceDay/conferenceDayModel";

export const adminConferenceDayApi = {
      getDayDetail: (searchDetail: IConferenceDaySearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Days?pageNumber=${searchDetail.pageNumber}`,
            };

            return AXIOS.request(options);
      },
}