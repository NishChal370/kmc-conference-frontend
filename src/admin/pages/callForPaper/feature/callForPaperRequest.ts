import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminCallForPaperApi } from "@/admin/api/service/adminCallForPaperApi";
import { IAdminCallForPaperDeleteRequest, IAdminCallForPaperPutRequest, IAdminCallForPaperStatusChangeReq, ICallForPaperBasicResponse, ICallForPaperBasicSearch, ICallForPaperByIdResponse, ICallForPaperByIdSearch } from "@/admin/model/callForPaper/callForPaperModel";

export const getCallForPaperBasicInfo = createAppAsyncThunk<ICallForPaperBasicResponse, ICallForPaperBasicSearch>(
      "callForPaper/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminCallForPaperApi.getBasicInfo(searchDetail);

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
                  const response = await adminCallForPaperApi.getCallForPaperDetailedById(CallForPaperDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);




export const putAdminCallForPaperFullDetail = createAppAsyncThunk<undefined, IAdminCallForPaperPutRequest>(
      "admin/callForPaper/put",
      async (CallForPaperUpdateDetail, { rejectWithValue }) => {
            try {
                  const response = await adminCallForPaperApi.putCallForPaperDetailed(CallForPaperUpdateDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const putAdminCallForPaperApprovalStatus = createAppAsyncThunk<undefined, IAdminCallForPaperStatusChangeReq>(
      "admin/callForPaper/approval-status/put",
      async (approvalDetail, { rejectWithValue }) => {
            try {
                  const response = await adminCallForPaperApi.putCallForPaperApprovalStatus(approvalDetail);

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
                  const response = await adminCallForPaperApi.deleteCallForPaperDetail(deletingDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
