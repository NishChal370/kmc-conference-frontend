import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IConferenceDayBasicInfoResponse, IConferenceDayResponse } from "@/admin/model/conferenceDay/conferenceDayModel";
import { deleteConferenceDay, getConferenceDayBasicInfo, getConferenceDayDetail, postConferenceDay, putConferenceDay } from "./conferenceDayRequest";



interface IConferenceDayState extends IBasicSliceState {
      data: IConferenceDayResponse
}


interface IConferenceDaysBasicInfoState extends IBasicSliceState {
      data: IConferenceDayBasicInfoResponse
}


type IConferenceDaySlice = {
      conferenceDays: IConferenceDayState;
      conferenceDaysBasicInfo: IConferenceDaysBasicInfoState;

}


const initialState: IConferenceDaySlice = {
      conferenceDays: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  days: []
            }
      },
      conferenceDaysBasicInfo: {
            status: Status.IDEL,
            data: []
      },
}



const conferenceDaySlice = createSlice({
      name: "conferenceDay",
      initialState,
      reducers: {
            resetConferenceDaySlice: (state) => {
                  state.conferenceDays = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              days: []
                        }
                  }
            },
            resetConferenceDaysBasicInfoSlice: (state) => {
                  state.conferenceDaysBasicInfo = {
                        status: Status.IDEL,
                        data: []
                  }
            }
      },
      extraReducers(builder) {
            builder
                  .addCase(getConferenceDayDetail.pending, (state) => {
                        state.conferenceDays.status = Status.LOADING;
                  })
                  .addCase(getConferenceDayDetail.fulfilled, (state, action) => {
                        state.conferenceDays.status = action.payload.days.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.conferenceDays.data = action.payload;

                  })
                  .addCase(getConferenceDayDetail.rejected, (state, action) => {
                        state.conferenceDays.status = Status.FAILED;
                        state.conferenceDays.error = action.payload;
                  })


                  .addCase(getConferenceDayBasicInfo.pending, (state) => {
                        state.conferenceDaysBasicInfo.status = Status.LOADING;
                  })
                  .addCase(getConferenceDayBasicInfo.fulfilled, (state, action) => {
                        state.conferenceDaysBasicInfo.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.conferenceDaysBasicInfo.data = action.payload;

                  })
                  .addCase(getConferenceDayBasicInfo.rejected, (state, action) => {
                        state.conferenceDaysBasicInfo.status = Status.FAILED;
                        state.conferenceDaysBasicInfo.error = action.payload;
                  })



                  .addCase(putConferenceDay.fulfilled, (state) => {
                        state.conferenceDays.isToRefetch = !state.conferenceDays.isToRefetch;
                  })

                  .addCase(postConferenceDay.fulfilled, (state) => {
                        state.conferenceDays.isToRefetch = !state.conferenceDays.isToRefetch;
                  })

                  .addCase(deleteConferenceDay.fulfilled, (state) => {
                        state.conferenceDays.isToRefetch = !state.conferenceDays.isToRefetch;
                  })
      },
})


export default conferenceDaySlice.reducer;

export const conferenceDayAction = conferenceDaySlice.actions;

export const conferenceDaysState = (state: RootState) => state.conferenceDay.conferenceDays;
export const conferenceDaysBasicInfoState = (state: RootState) => state.conferenceDay.conferenceDaysBasicInfo;