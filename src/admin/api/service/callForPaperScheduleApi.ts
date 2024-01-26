import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { ICallForPaperDeleteRequest, ICallForPaperScheduleApprovalStatusChangeReq, ICallForPaperScheduleSearch } from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";

const callForPaperScheduleApi = {
      get: (searchDetail: ICallForPaperScheduleSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `CallForPaper/sessions/${searchDetail.callId}`,
            };

            return AXIOS.request(options);
      },

      putApprovalStatus: (approvalDetail: ICallForPaperScheduleApprovalStatusChangeReq) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `CallForPaper/update-status`,
                  data: approvalDetail
            };


            return AXIOS.request(options);
      },


      deleteCallForPaperSchedule: (detail: ICallForPaperDeleteRequest) => {
            const options: AxiosRequestConfig = {
                  method: "Delete",
                  url: `Admin/call-session`,
                  data: detail
            };


            return AXIOS.request(options);
      },
}


export default callForPaperScheduleApi

