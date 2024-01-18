import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import {
      IScheduleDeleteRequest,
      ISchedulePostRequest,
      ISchedulePutRequest,
      ISchedulesResponse,
      IScheduleSearch,
      IScheduleContentDetailResponse,
      IScheduleContentDetailSearch,
} from "@/admin/model/schedule/scheduleModel";
import { adminScheduleApi } from "@/admin/api/service/adminScheduleApi";

export const getSchedules = createAppAsyncThunk<ISchedulesResponse, IScheduleSearch>(
      "admin/schedules/list/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleApi.getSchedules(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const postSchedule = createAppAsyncThunk<undefined, ISchedulePostRequest>(
      "admin/schedule/post",
      async (newScheduleDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleApi.postSchedule(newScheduleDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const putSchedule = createAppAsyncThunk<undefined, ISchedulePutRequest>(
      "admin/schedule/put",
      async (scheduleUpdateDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleApi.putSchedule(scheduleUpdateDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const deleteSchedule = createAppAsyncThunk<undefined, IScheduleDeleteRequest>(
      "admin/schedule/delete",
      async (scheduleDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleApi.deleteSchedule(scheduleDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const getScheduleContentDetail = createAppAsyncThunk<
      IScheduleContentDetailResponse,
      IScheduleContentDetailSearch
>("site/schedules/content-detail/get/by-themeId", async (searchDetail, { rejectWithValue }) => {
      try {
            const response = await adminScheduleApi.getScheduleContentDetail(searchDetail);

            return response.data;
      } catch (error: any) {
            return rejectWithValue(error.response.data);
      }
});
