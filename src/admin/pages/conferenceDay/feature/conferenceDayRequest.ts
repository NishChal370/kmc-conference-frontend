import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { adminConferenceDayApi } from "@/admin/api/service/adminConferenceDay";
import { IConferenceDayResponse, IConferenceDaySearch } from "@/admin/model/conferenceDay/conferenceDayModel";

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