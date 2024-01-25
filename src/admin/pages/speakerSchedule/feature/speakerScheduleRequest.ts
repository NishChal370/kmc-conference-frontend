import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { ISpeakerScheduleBasicResponse, ISpeakerScheduleBasicSearch } from "@/admin/model/speakerSchedule/speakerScheduleModel";
import speakerScheduleApi from "@/admin/api/service/speakerScheduleApi";

export const fetchSpeakerScheduleBasic = createAppAsyncThunk<ISpeakerScheduleBasicResponse, ISpeakerScheduleBasicSearch>(
      "speaker-schedules/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await speakerScheduleApi.getBasicInfo(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);