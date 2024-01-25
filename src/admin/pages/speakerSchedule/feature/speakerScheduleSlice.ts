import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISpeakerScheduleBasicResponse } from "@/admin/model/speakerSchedule/speakerScheduleModel";
import { fetchSpeakerScheduleBasic } from "./speakerScheduleRequest";

interface ISpeakerScheduleSlice extends IBasicSliceState {
      data: ISpeakerScheduleBasicResponse;
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
                  .addCase(fetchSpeakerScheduleBasic.pending, (state) => {
                        state.speakerSchedule.status = Status.LOADING;
                  })
                  .addCase(fetchSpeakerScheduleBasic.fulfilled, (state, action) => {
                        state.speakerSchedule.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.speakerSchedule.data = action.payload;

                  })
                  .addCase(fetchSpeakerScheduleBasic.rejected, (state, action) => {
                        state.speakerSchedule.status = Status.FAILED;
                        state.speakerSchedule.error = action.payload;
                  })
      },
})


export default speakerScheduleSlice.reducer;

export const speakerScheduleSliceAction = speakerScheduleSlice.actions;

export const speakerScheduleSliceState = (state: RootState) => state.speakerSchedule.speakerSchedule;