import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import speakerApi from "@/admin/api/service/speakerApi";
import { ISpeakerBasicSearch, ISpeakerBasicResponse, ISpeakerByIdResponse, ISpeakerByIdSearch, ISpeakerDeleteRequest, } from "@/admin/model/speaker/speakerModel";

export const getSpeakerBasicInfo = createAppAsyncThunk<ISpeakerBasicResponse, ISpeakerBasicSearch>(
      "speaker/basic/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await speakerApi.getBasicInfo(searchDetail);

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
                  const response = await speakerApi.getSpeakerDetailedById(speakerDetail);

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
                  const response = await speakerApi.deleteSpeakerDetail(deletingDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

