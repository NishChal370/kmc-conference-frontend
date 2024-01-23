import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminSpeakerApi } from "@/admin/api/service/adminSpeakerApi";
import { ISpeakerContentDetailResponse, ISpeakerContentDetailSearch, ISpeakersContentResponse } from "@/admin/model/speaker/speakerContentModel";


export const getSpeakersContent = createAppAsyncThunk<ISpeakersContentResponse>(
      "speakers/content/get",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getSpeakersContent();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const getSpeakerContentDetail = createAppAsyncThunk<ISpeakerContentDetailResponse, ISpeakerContentDetailSearch>(
      "speakers/content/by-id/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminSpeakerApi.getSpeakerContentDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);