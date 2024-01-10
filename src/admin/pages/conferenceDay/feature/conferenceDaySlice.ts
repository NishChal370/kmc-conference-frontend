import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IConferenceDayResponse } from "@/admin/model/conferenceDay/conferenceDayModel";
import { IBasicSliceState } from "@/models/commonModel";
import { getConferenceDayDetail } from "./conferenceDayRequest";



interface IConferenceDaySlice extends IBasicSliceState {
      data: IConferenceDayResponse
}


const initialState: IConferenceDaySlice = {
      status: Status.IDEL,
      data: {
            totalPages: 0,
            days: []
      }
}



const conferenceDaySlice = createSlice({
      name: "conferenceDay",
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder
                  .addCase(getConferenceDayDetail.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(getConferenceDayDetail.fulfilled, (state, action) => {
                        state.status = action.payload.days.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.data = action.payload;

                  })
                  .addCase(getConferenceDayDetail.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      },
})


export default conferenceDaySlice.reducer;

export const conferenceDayAction = conferenceDaySlice.actions;

export const conferenceDayState = (state: RootState) => state.conferenceDay;