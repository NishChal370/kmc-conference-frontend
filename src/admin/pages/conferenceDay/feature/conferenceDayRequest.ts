import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminConferenceDayApi } from "@/admin/api/service/adminConferenceDay";
import { IConferenceDayPutRequest, IConferenceDayResponse, IConferenceDaySearch } from "@/admin/model/conferenceDay/conferenceDayModel";

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
      "admin/conference/put",
      async (conferenceDayDetail, { rejectWithValue }) => {
            try {
                  const response = await adminConferenceDayApi.putDayDetail(conferenceDayDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);