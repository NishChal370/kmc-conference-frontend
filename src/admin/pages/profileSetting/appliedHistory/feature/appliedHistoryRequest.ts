import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminAppliedHistoryApi } from "@/admin/api/service/adminAppliedHistoryApi";
import {
      IAppliedCallForPaperSessionDetailSearch, IAppliedCallForPaperSessionDetailedResponse, IAppliedCallForPaperSessionResponse, IAppliedCallForPaperScheduleDeleteReq,
      IAppliedParticipationSessionDetailSearch, IAppliedParticipationSessionDetailedResponse, IAppliedParticipationSessionResponse, IAppliedParticipationScheduleDeleteReq, IAppliedSpeakerBasicPutRequest, IAppliedSpeakerBasicResponse, IAppliedSpeakerSessionDetailSearch, IAppliedSpeakerSessionDetailedResponse, IAppliedSpeakerSessionResponse, IAppliedSpeakerScheduleDeleteReq, IAppliedCallForPaperBasicResponse, IAppliedCallForPaperPutRequest, IAppliedParticipationBasicResponse, IAppliedParticipationBasicPutRequest
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





// ---- Call For Paper -----

export const getApplicationCallForPaperBasicInfo = createAppAsyncThunk<IAppliedCallForPaperBasicResponse>(
      "admin/applied-history/call-for-paper/basic",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationCallForPaperBasicInfo();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const getApplicationCallForPaperSession = createAppAsyncThunk<IAppliedCallForPaperSessionResponse>(
      "admin/applied-history/call-for-paper/session",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationCallForPaperSession();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const getApplicationCallForPaperSessionDetailed = createAppAsyncThunk<IAppliedCallForPaperSessionDetailedResponse, IAppliedCallForPaperSessionDetailSearch>(
      "admin/applied-history/callForPaper/session/detailed",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationCallForPaperSessionDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const putAppliedCallForPaperBasicInfo = createAppAsyncThunk<unknown, IAppliedCallForPaperPutRequest>(
      "applied-history/callForPaper/basic-info/put",
      async (updatedDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.putAppliedCallForPaperBasicInfo(updatedDetail);

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







// ---- Participation -----



export const getApplicationParticipationBasicInfo = createAppAsyncThunk<IAppliedParticipationBasicResponse>(
      "admin/applied-history/participation/basic",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationParticipationBasicInfo();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const getApplicationParticipationSessions = createAppAsyncThunk<IAppliedParticipationSessionResponse>(
      "admin/applied-history/participation/sessions",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationParticipantSessions();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getApplicationParticipationSessionDetailed = createAppAsyncThunk<IAppliedParticipationSessionDetailedResponse, IAppliedParticipationSessionDetailSearch>(
      "admin/applied-history/participation/session/detailed",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.getApplicationParticipationSessionDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const putAppliedParticipationBasicInfo = createAppAsyncThunk<unknown, IAppliedParticipationBasicPutRequest>(
      "applied-history/participation/basic-info/put",
      async (updatedDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.putAppliedParticipationBasicInfo(updatedDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const deleteApplicationParticipationSchedule = createAppAsyncThunk<unknown, IAppliedParticipationScheduleDeleteReq>(
      "applied-history/participation/session/delete",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminAppliedHistoryApi.deleteAppliedParticipationSchedule(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);