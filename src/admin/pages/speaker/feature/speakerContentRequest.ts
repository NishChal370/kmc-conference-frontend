import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import speakerApi from "@/admin/api/service/speakerApi";
import { ISpeakerContentDetailResponse, ISpeakerContentDetailSearch, ISpeakersContentResponse } from "@/admin/model/speaker/speakerContentModel";


export const getSpeakersContent = createAppAsyncThunk<ISpeakersContentResponse>(
      "speakers/content/get",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await speakerApi.getSpeakersContent();

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
                  const response = await speakerApi.getSpeakerContentDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);