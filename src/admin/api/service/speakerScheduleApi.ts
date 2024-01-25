import { AxiosRequestConfig } from "axios";
import AXIOS from "@/api/constant";
import { ISpeakerScheduleBasicSearch } from "@/admin/model/speakerSchedule/speakerScheduleModel";

const speakerScheduleApi = {
      getBasicInfo: (searchDetail: ISpeakerScheduleBasicSearch) => {
            const options: AxiosRequestConfig = {
                  method: "GET",
                  url: `Speaker/sessions/${searchDetail.speakerId}`,
            };

            return AXIOS.request(options);
      },
}

export default speakerScheduleApi