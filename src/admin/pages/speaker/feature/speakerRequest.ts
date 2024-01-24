import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminSpeakerApi } from "@/admin/api/service/adminSpeakerApi";
import { ISpeakerBasicSearch, IAdminSpeakerPutRequest, IAdminSpeakerStatusChangeReq, ISpeakerBasicResponse, ISpeakerByIdResponse, ISpeakerByIdSearch, ISpeakerDeleteRequest, ISpeakerPostRequest, ISpeakerNewSessionPostRequest } from "@/admin/model/speaker/speakerModel";

export const getSpeakerBasicInfo = createAppAsyncThunk<ISpeakerBasicResponse, ISpeakerBasicSearch>(
      "speaker/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getBasicInfo(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getSpeakerDetailedById = createAppAsyncThunk<ISpeakerByIdResponse, ISpeakerByIdSearch>(
      "admin/speaker/detailed-info/get",
      async (speakerDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getSpeakerDetailedById(speakerDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);




export const putAdminSpeakerFullDetail = createAppAsyncThunk<undefined, IAdminSpeakerPutRequest>(
      "admin/speaker/put",
      async (speakerUpdateDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.putSpeakerDetailed(speakerUpdateDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const putAdminSpeakerApprovalStatus = createAppAsyncThunk<undefined, IAdminSpeakerStatusChangeReq>(
      "admin/speaker/approval-status/put",
      async (approvalDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.putSpeakerApprovalStatus(approvalDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const postSpeakerDetail = createAppAsyncThunk<undefined, ISpeakerPostRequest>(
      "site/speaker/detail/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.postSpeakerDetail(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteSpeakerDetail = createAppAsyncThunk<undefined, ISpeakerDeleteRequest>(
      "admin/speaker/delete",
      async (deletingDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.deleteSpeakerDetail(deletingDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const postSpeakerNewSession = createAppAsyncThunk<undefined, ISpeakerNewSessionPostRequest>(
      "site/speaker/new-session/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.postSpeakerNewSession(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
