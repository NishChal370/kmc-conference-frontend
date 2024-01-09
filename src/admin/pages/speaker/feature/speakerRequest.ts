import { adminSpeakerApi } from "@/admin/api/service/adminSpeakerApi";
import { IAdminSpeakerPutRequest } from "@/admin/model/speaker/adminSpeakerModel";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { ISpeakerBasicInfoResponse } from "@/models/speaker/SpeakerModel";

export const getSpeakerBasicInfo = createAppAsyncThunk<ISpeakerBasicInfoResponse>(
      "speaker/basic",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getBasicInfo();

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

