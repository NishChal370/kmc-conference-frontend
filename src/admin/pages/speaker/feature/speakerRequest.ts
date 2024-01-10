import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminSpeakerApi } from "@/admin/api/service/adminSpeakerApi";
import { ISpeakerBasicInfoResponse } from "@/models/speaker/SpeakerModel";
import { IAdminSpeakerBasicInfoSearch, IAdminSpeakerFullDetail, IAdminSpeakerFullDetailedInfoById, IAdminSpeakerPutRequest } from "@/admin/model/speaker/adminSpeakerModel";

export const getSpeakerBasicInfo = createAppAsyncThunk<ISpeakerBasicInfoResponse, IAdminSpeakerBasicInfoSearch>(
      "speaker/basic",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getBasicInfo(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getAdminSpeakerFullDetailedInfo = createAppAsyncThunk<IAdminSpeakerFullDetail, IAdminSpeakerFullDetailedInfoById>(
      "admin/speaker/full-detail/get",
      async (speakerDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getSpeakerFullDetailedInfoById(speakerDetail);

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
                  const response = await adminSpeakerApi.putSpeakerDetail(speakerUpdateDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

