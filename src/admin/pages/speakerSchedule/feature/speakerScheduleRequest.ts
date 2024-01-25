import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import speakerScheduleApi from "@/admin/api/service/speakerScheduleApi";
import { ISpeakerScheduleResponse, ISpeakerScheduleSearch, ISpeakerScheduleApprovalStatusChangeReq, ISpeakerScheduleDeleteAdminReq } from "@/admin/model/speakerSchedule/speakerScheduleModel";

export const fetchSpeakerSchedule = createAppAsyncThunk<ISpeakerScheduleResponse, ISpeakerScheduleSearch>(
      "speaker-schedules/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await speakerScheduleApi.get(searchDetail);

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


export const deleteSpeakerScheduleByAdmin = createAppAsyncThunk<undefined, ISpeakerScheduleDeleteAdminReq>(
      "admin/speaker-schedules/delete",
      async (deletingDetail, { rejectWithValue }) => {
            try {
                  const response = await speakerScheduleApi.deleteByAdmin(deletingDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
