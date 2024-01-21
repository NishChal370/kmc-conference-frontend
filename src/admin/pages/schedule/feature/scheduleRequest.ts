import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import {
      IScheduleSearch,
      ISchedulesResponse,
      ISchedulePutRequest,
      ISchedulePostRequest,
      IScheduleDeleteRequest,
} from "@/admin/model/schedule/scheduleModel";
import {
      IScheduleContentDetailSearch,
      IScheduleContentDetailResponse,
      IScheduleContentBriefDetailSearch,
      IScheduleContentBriefDetailResponse,
      IScheduleContentDetailPrivateResponse,
} from "@/admin/model/schedule/scheduleContentModel";
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

export const getScheduleContentPrivateDetail = createAppAsyncThunk<
      IScheduleContentDetailPrivateResponse,
      IScheduleContentDetailSearch
>("site/schedules/private/content-detail/get/by-themeId", async (searchDetail, { rejectWithValue }) => {
      try {
            const response = await adminScheduleApi.getScheduleContentPrivateDetail(searchDetail);

            return response.data;
      } catch (error: any) {
            return rejectWithValue(error.response.data);
      }
});

export const getScheduleContentBriefDetail = createAppAsyncThunk<
      IScheduleContentBriefDetailResponse,
      IScheduleContentBriefDetailSearch
>("site/schedules/content-detail/brief/get/by-session", async (searchDetail, { rejectWithValue }) => {
      try {
            const response = await adminScheduleApi.getScheduleContentBriefDetail(searchDetail);

            return response.data;
      } catch (error: any) {
            return rejectWithValue(error.response.data);
      }
});
