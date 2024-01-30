import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminAppliedHistoryApi } from "@/admin/api/service/adminAppliedHistoryApi";
import {
      IAppliedCallForPaperDetailSearch, IAppliedCallForPaperDetailedResponse, IAppliedCallForPaperResponse, IAppliedCallForPaperScheduleDeleteReq,
      IAppliedParticipationDetailSearch, IAppliedParticipationDetailedResponse, IAppliedParticipationResponse, IAppliedParticipationScheduleDeleteReq, IAppliedSpeakerBasicPutRequest, IAppliedSpeakerBasicResponse, IAppliedSpeakerSessionDetailSearch, IAppliedSpeakerSessionDetailedResponse, IAppliedSpeakerSessionResponse, IAppliedSpeakerScheduleDeleteReq
} from "@/admin/model/appliedHistory/appliedHistoryModel";




export const getApplicationSpeakerBasicInfo = createAppAsyncThunk<IAppliedSpeakerBasicResponse>(
      "admin/applied-history/speaker",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationSpeakerBasicInfo();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getApplicationSpeakerSession = createAppAsyncThunk<IAppliedSpeakerSessionResponse>(
      "admin/applied-history/speaker/session",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationSpeakerSession();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getApplicationCallForPaper = createAppAsyncThunk<IAppliedCallForPaperResponse>(
      "admin/applied-history/call-for-paper",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationCallForPaper();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getApplicationParticipation = createAppAsyncThunk<IAppliedParticipationResponse>(
      "admin/applied-history/participation",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationParticipant();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getApplicationParticipationDetailed = createAppAsyncThunk<IAppliedParticipationDetailedResponse, IAppliedParticipationDetailSearch>(
      "admin/applied-history/participation/detailed",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationParticipationDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const getApplicationSpeakerSessionDetailed = createAppAsyncThunk<IAppliedSpeakerSessionDetailedResponse, IAppliedSpeakerSessionDetailSearch>(
      "admin/applied-history/speaker/session/detailed",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationSpeakerSessionDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const getApplicationCallForPaperDetailed = createAppAsyncThunk<IAppliedCallForPaperDetailedResponse, IAppliedCallForPaperDetailSearch>(
      "admin/applied-history/callForPaper/detailed",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationCallForPaperDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const deleteApplicationParticipationSchedule = createAppAsyncThunk<unknown, IAppliedParticipationScheduleDeleteReq>(
      "applied-history/participation/delete",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.deleteAppliedParticipationSchedule(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteApplicationCallForPaperSchedule = createAppAsyncThunk<unknown, IAppliedCallForPaperScheduleDeleteReq>(
      "applied-history/callForPaper/delete",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.deleteAppliedCallForPaperSchedule(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const deleteApplicationSpeakerSchedule = createAppAsyncThunk<unknown, IAppliedSpeakerScheduleDeleteReq>(
      "applied-history/speaker/delete",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.deleteAppliedSpeakerSchedule(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const putAppliedSpeakerBasicInfo = createAppAsyncThunk<unknown, IAppliedSpeakerBasicPutRequest>(
      "applied-history/speaker/basic-info/put",
      async (updatedDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.putAppliedSpeakerBasicInfo(updatedDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
