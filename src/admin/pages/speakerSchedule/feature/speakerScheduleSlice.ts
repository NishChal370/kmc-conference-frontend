import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISpeakerScheduleResponse } from "@/admin/model/speakerSchedule/speakerScheduleModel";
import { deleteSpeakerScheduleByAdmin, fetchSpeakerSchedule, putSpeakerScheduleApprovalStatus } from "./speakerScheduleRequest";

interface ISpeakerScheduleSlice extends IBasicSliceState {
      data: ISpeakerScheduleResponse;
}


type IInitialSlice = {
      speakerSchedule: ISpeakerScheduleSlice,
};


const initialState: IInitialSlice = {
      speakerSchedule: {
            status: Status.IDEL,
            data: []
      },
}



const speakerScheduleSlice = createSlice({
      name: "speakerSchedule",
      initialState,
      reducers: {
            resetSpeakerScheduleSlice: (state) => {
                  state.speakerSchedule = {
                        status: Status.IDEL,
                        data: []
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(fetchSpeakerSchedule.pending, (state) => {
                        state.speakerSchedule.status = Status.LOADING;
                  })
                  .addCase(fetchSpeakerSchedule.fulfilled, (state, action) => {
                        state.speakerSchedule.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.speakerSchedule.data = action.payload;

                  })
                  .addCase(fetchSpeakerSchedule.rejected, (state, action) => {
                        state.speakerSchedule.status = Status.FAILED;
                        state.speakerSchedule.error = action.payload;
                  })


                  .addCase(putSpeakerScheduleApprovalStatus.fulfilled, (state) => {
                        state.speakerSchedule.isToRefetch = !state.speakerSchedule.isToRefetch;
                  })

                  .addCase(deleteSpeakerScheduleByAdmin.fulfilled, (state) => {
                        state.speakerSchedule.isToRefetch = !state.speakerSchedule.isToRefetch;
                  })
      },
})


export default speakerScheduleSlice.reducer;

export const speakerScheduleSliceAction = speakerScheduleSlice.actions;

export const speakerScheduleSliceState = (state: RootState) => state.speakerSchedule.speakerSchedule;