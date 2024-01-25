import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { ISpeakerScheduleBasicSearch, ISpeakerScheduleApprovalStatusChangeReq } from "@/admin/model/speakerSchedule/speakerScheduleModel";

const speakerScheduleApi = {
      getBasicInfo: (searchDetail: ISpeakerScheduleBasicSearch) => {
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

}

export default speakerScheduleApi