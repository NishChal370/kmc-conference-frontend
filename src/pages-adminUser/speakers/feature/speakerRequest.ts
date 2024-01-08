import { speakerApi } from "@/api/service/speakerApi";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { ISpeakerBasicInfoResponse } from "@/models/speaker/SpeakerModel";

export const getSpeakerBasicInfo = createAppAsyncThunk<ISpeakerBasicInfoResponse>(
      "speaker/basic",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await speakerApi.getBasicInfo();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
