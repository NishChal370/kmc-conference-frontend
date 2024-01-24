import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import speakerApi from "@/admin/api/service/speakerApi";
import { ISpeakerNewSessionPostRequest, ISpeakerPostRequest } from "@/admin/model/speaker/becomeSpeakerModel";



export const postSpeakerDetail = createAppAsyncThunk<undefined, ISpeakerPostRequest>(
      "site/speaker/detail/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await speakerApi.postSpeakerDetail(detail);

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
                  const response = await speakerApi.postSpeakerNewSession(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
