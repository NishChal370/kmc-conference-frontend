import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { ISpeakerScheduleSearch, ISpeakerScheduleApprovalStatusChangeReq, ISpeakerScheduleDeleteAdminReq } from "@/admin/model/speakerSchedule/speakerScheduleModel";

const speakerScheduleApi = {
      get: (searchDetail: ISpeakerScheduleSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/sessions/${searchDetail.speakerId}`,
            };

            return AXIOS.request(options);
      },


      putApprovalStatus: (approvalDetail: ISpeakerScheduleApprovalStatusChangeReq) => {
            const options: AxiosRequestConfig = {
                  method: "PUT",
                  url: `Speaker/update-status`,
                  data: approvalDetail
            };


            return AXIOS.request(options);
      },


      deleteByAdmin: (deletingDetail: ISpeakerScheduleDeleteAdminReq) => {
            const options: AxiosRequestConfig = {
                  method: "DELETE",
                  url: `Admin/speaker-session`,
                  data: deletingDetail,
            };

            return AXIOS.request(options);
      },

}

export default speakerScheduleApi