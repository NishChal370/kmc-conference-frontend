import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminConferenceDayApi } from "@/admin/api/service/adminConferenceDay";
import { IConferenceDayDeleteRequest, IConferenceDayPostRequest, IConferenceDayPutRequest, IConferenceDayResponse, IConferenceDaySearch } from "@/admin/model/conferenceDay/conferenceDayModel";

export const getConferenceDayDetail = createAppAsyncThunk<IConferenceDayResponse, IConferenceDaySearch>(
      "conference-day/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminConferenceDayApi.getDayDetail(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

export const putConferenceDay = createAppAsyncThunk<undefined, IConferenceDayPutRequest>(
      "admin/conference-day/put",
      async (conferenceDayDetail, { rejectWithValue }) => {
            try {
                  const response = await adminConferenceDayApi.putDayDetail(conferenceDayDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const postConferenceDay = createAppAsyncThunk<undefined, IConferenceDayPostRequest>(
      "admin/conference-day/post",
      async (conferenceDayDetail, { rejectWithValue }) => {
            try {
                  const response = await adminConferenceDayApi.postDayDetail(conferenceDayDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const deleteConferenceDay = createAppAsyncThunk<undefined, IConferenceDayDeleteRequest>(
      "admin/conference-day/delete",
      async (conferenceDayDetail, { rejectWithValue }) => {
            try {
                  const response = await adminConferenceDayApi.deleteDayDetail(conferenceDayDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);