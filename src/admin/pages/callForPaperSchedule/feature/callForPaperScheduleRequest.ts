import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import callForPaperScheduleApi from "@/admin/api/service/callForPaperScheduleApi";
import { ICallForPaperDeleteRequest, ICallForPaperScheduleApprovalStatusChangeReq, ICallForPaperScheduleResponse, ICallForPaperScheduleSearch } from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";

export const fetchCallForPaperSchedule = createAppAsyncThunk<ICallForPaperScheduleResponse, ICallForPaperScheduleSearch>(
      "callForPaper/schedules/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperScheduleApi.get(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const putCallForPaperScheduleApprovalStatus = createAppAsyncThunk<undefined, ICallForPaperScheduleApprovalStatusChangeReq>(
      "callForPaper/schedules/approval-status/put",
      async (approvalDetail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperScheduleApi.putApprovalStatus(approvalDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteCallForPaperSchedule = createAppAsyncThunk<undefined, ICallForPaperDeleteRequest>(
      "callForPaper/schedules/delete",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperScheduleApi.deleteCallForPaperSchedule(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);