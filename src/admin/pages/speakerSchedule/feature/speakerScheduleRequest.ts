import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import speakerScheduleApi from "@/admin/api/service/speakerScheduleApi";
import { ISpeakerScheduleBasicResponse, ISpeakerScheduleBasicSearch, ISpeakerScheduleApprovalStatusChangeReq } from "@/admin/model/speakerSchedule/speakerScheduleModel";

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



export const putSpeakerScheduleApprovalStatus = createAppAsyncThunk<undefined, ISpeakerScheduleApprovalStatusChangeReq>(
      "speaker-schedules/approval-status/put",
      async (approvalDetail, { rejectWithValue }) => {
            try {
                  const response = await speakerScheduleApi.putApprovalStatus(approvalDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
