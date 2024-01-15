import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { createQueryString } from "@/utils/stringFormat/createQueryString";
import { IScheduleDeleteRequest, ISchedulePostRequest, ISchedulePutRequest, IScheduleSearch } from "@/admin/model/schedule/scheduleModel";

export const adminScheduleApi = {
      getSchedules: (searchDetail: IScheduleSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Session${createQueryString(searchDetail)}`,
            };

            return AXIOS.request(options);
      },


      postSchedule: (newScheduleDetail: ISchedulePostRequest) => {
            const options: AxiosRequestConfig = {
                  method: "POST",
                  url: `Session`,
                  data: newScheduleDetail
            };

            return AXIOS.request(options);
      },


      putSchedule: (scheduleUpdatedDetail: ISchedulePutRequest) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Session`,
                  data: scheduleUpdatedDetail
            };

            return AXIOS.request(options);
      },


      deleteSchedule: (scheduleDetail: IScheduleDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Session`,
                  data: scheduleDetail
            };

            return AXIOS.request(options);
      },
}