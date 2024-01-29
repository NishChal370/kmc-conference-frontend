import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { callForPaperApi } from "@/admin/api/service/callForPaperApi";
import { ICallForPaperAddNewSessionPutRequest, ICallForPaperPostRequest } from "@/admin/model/callForPaper/callForPaperApplyModel";
import { IAdminCallForPaperDeleteRequest, ICallForPaperBasicResponse, ICallForPaperBasicSearch, ICallForPaperByIdResponse, ICallForPaperByIdSearch } from "@/admin/model/callForPaper/callForPaperModel";

export const getCallForPaperBasicInfo = createAppAsyncThunk<ICallForPaperBasicResponse, ICallForPaperBasicSearch>(
      "callForPaper/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperApi.getBasicInfo(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getCallForPaperDetailedById = createAppAsyncThunk<ICallForPaperByIdResponse, ICallForPaperByIdSearch>(
      "admin/callForPaper/detailed-info/get",
      async (CallForPaperDetail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperApi.getCallForPaperDetailedById(CallForPaperDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const postCallForPaperDetail = createAppAsyncThunk<undefined, ICallForPaperPostRequest>(
      "site/callForPaper/post",
      async (callForPaperDetail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperApi.postCallForPaperDetail(callForPaperDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const deleteCallForPaperDetail = createAppAsyncThunk<undefined, IAdminCallForPaperDeleteRequest>(
      "admin/callForPaper/delete",
      async (deletingDetail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperApi.deleteCallForPaperDetail(deletingDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const putCallForPaperNewSession = createAppAsyncThunk<undefined, ICallForPaperAddNewSessionPutRequest>(
      "site/callForPaper/new-session/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await callForPaperApi.postCallForPaperNewSession(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);