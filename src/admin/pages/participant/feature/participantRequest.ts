import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminParticipantApi } from "@/admin/api/service/adminParticipantApi";
import { IAdminParticipantDeleteRequest, IParticipantBasicResponse, IParticipantBasicSearch, IParticipantByIdResponse, IParticipantByIdSearch, IParticipantPostRequest } from "@/admin/model/participant/participantModel";

export const getParticipantBasicInfo = createAppAsyncThunk<IParticipantBasicResponse, IParticipantBasicSearch>(
      "participant/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminParticipantApi.getBasicInfo(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getParticipantDetailedById = createAppAsyncThunk<IParticipantByIdResponse, IParticipantByIdSearch>(
      "participant/detailed-info/get",
      async (participantDetail, { rejectWithValue }) => {
            try {
                  const response = await adminParticipantApi.getParticipantDetailedById(participantDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteParticipantDetail = createAppAsyncThunk<undefined, IAdminParticipantDeleteRequest>(
      "admin/participant/delete",
      async (deletingDetail, { rejectWithValue }) => {
            try {
                  const response = await adminParticipantApi.deleteParticipantDetail(deletingDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);



export const postParticipation = createAppAsyncThunk<unknown, IParticipantPostRequest>(
      "participation/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await adminParticipantApi.postParticipation(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);