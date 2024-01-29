import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ICallForPaperScheduleResponse } from "@/admin/model/callForPaperSchedule/callForPaperScheduleModel";
import { deleteCallForPaperSchedule, fetchCallForPaperSchedule, putCallForPaperScheduleApprovalStatus } from "./callForPaperScheduleRequest";


interface ICallForPaperScheduleSlice extends IBasicSliceState {
      data: ICallForPaperScheduleResponse
}



type IInitialState = {
      callForPaperSchedule: ICallForPaperScheduleSlice,
};



const initialState: IInitialState = {
      callForPaperSchedule: {
            status: Status.IDEL,
            data: []
      },
}

const callForPaperScheduleSlice = createSlice({
      name: "callForPaperSchedule",
      initialState,
      reducers: {
            resetCallForPaperScheduleSlice: (state) => {
                  state.callForPaperSchedule = {
                        status: Status.IDEL,
                        data: []
                  };
            },

      },
      extraReducers(builder) {
            builder
                  .addCase(fetchCallForPaperSchedule.pending, (state) => {
                        state.callForPaperSchedule.status = Status.LOADING;
                  })
                  .addCase(fetchCallForPaperSchedule.fulfilled, (state, action) => {
                        state.callForPaperSchedule.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.callForPaperSchedule.data = action.payload;

                  })
                  .addCase(fetchCallForPaperSchedule.rejected, (state, action) => {
                        state.callForPaperSchedule.status = Status.FAILED;
                        state.callForPaperSchedule.error = action.payload;
                  })


                  .addCase(putCallForPaperScheduleApprovalStatus.fulfilled, (state) => {
                        state.callForPaperSchedule.isToRefetch = !state.callForPaperSchedule.isToRefetch;
                  })


                  .addCase(deleteCallForPaperSchedule.fulfilled, (state) => {
                        state.callForPaperSchedule.isToRefetch = !state.callForPaperSchedule.isToRefetch;
                  })
      },
})


export default callForPaperScheduleSlice.reducer;

export const callForPaperScheduleAction = callForPaperScheduleSlice.actions;

export const callForPaperScheduleSliceState = (state: RootState) => state.callForPaperSchedule.callForPaperSchedule;