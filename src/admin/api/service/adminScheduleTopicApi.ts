import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { createQueryString } from "@/utils/stringFormat/createQueryString";
import { IScheduleTopicDeleteRequest, IScheduleTopicPostRequest, IScheduleTopicPutRequest, IScheduleTopicsSearch } from "@/admin/model/scheduleTopic/scheduleTopicModel";

export const adminScheduleTopicApi = {
      getScheduleTopics: (searchDetail: IScheduleTopicsSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `SessionTopic${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },


      postScheduleTopic: (newScheduleTopicDetail: IScheduleTopicPostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `SessionTopic`,
                  data: newScheduleTopicDetail
            };

            return AXIOS.request(options);
      },


      putScheduleTopic: (scheduleTopicUpdatedDetail: IScheduleTopicPutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `SessionTopic`,
                  data: scheduleTopicUpdatedDetail
            };

            return AXIOS.request(options);
      },


      deleteScheduleTopic: (scheduleTopicDetail: IScheduleTopicDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `SessionTopic`,
                  data: scheduleTopicDetail
            };

            return AXIOS.request(options);
      },
}