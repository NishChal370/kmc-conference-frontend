import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminScheduleTopicApi } from "@/admin/api/service/adminScheduleTopicApi";
import { IScheduleTopicDeleteRequest, IScheduleTopicPostRequest, IScheduleTopicPutRequest, IScheduleTopicsResponse, IScheduleTopicsSearch } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { IScheduleTopicContentResponse, IScheduleTopicContentSearch } from "@/admin/model/scheduleTopic/scheduleTopicContentModel";


export const getScheduleTopics = createAppAsyncThunk<IScheduleTopicsResponse, IScheduleTopicsSearch>(
      "admin/schedule-topics/list/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleTopicApi.getScheduleTopics(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const postScheduleTopic = createAppAsyncThunk<undefined, IScheduleTopicPostRequest>(
      "admin/schedule-topics/post",
      async (newScheduleTopicDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleTopicApi.postScheduleTopic(newScheduleTopicDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const putScheduleTopic = createAppAsyncThunk<undefined, IScheduleTopicPutRequest>(
      "admin/schedule-topic/put",
      async (scheduleTopicUpdateDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleTopicApi.putScheduleTopic(scheduleTopicUpdateDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const deleteScheduleTopic = createAppAsyncThunk<undefined, IScheduleTopicDeleteRequest>(
      "admin/schedule-topic/delete",
      async (scheduleDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleTopicApi.deleteScheduleTopic(scheduleDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const getScheduleTopicContent = createAppAsyncThunk<IScheduleTopicContentResponse, IScheduleTopicContentSearch>(
      "site/schedule-topic/content/by-id/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminScheduleTopicApi.getScheduleTopicContent(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);