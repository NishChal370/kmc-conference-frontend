import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISchedulesResponse } from "@/admin/model/schedule/scheduleModel";
import { deleteSchedule, getSchedules, postSchedule, putSchedule } from "./scheduleRequest";

interface ISchedulesSlice extends IBasicSliceState {
      data: ISchedulesResponse;
}


type IScheduleSlice = {
      schedules: ISchedulesSlice,
};


const initialState: IScheduleSlice = {
      schedules: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  sessions: []
            }
      },
}



const scheduleSlice = createSlice({
      name: "schedule",
      initialState,
      reducers: {
            resetScheduleSlice: (state) => {
                  state.schedules = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              sessions: []
                        }
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getSchedules.pending, (state) => {
                        state.schedules.status = Status.LOADING;
                  })
                  .addCase(getSchedules.fulfilled, (state, action) => {
                        state.schedules.status = action.payload.sessions.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.schedules.data = action.payload;

                  })
                  .addCase(getSchedules.rejected, (state, action) => {
                        state.schedules.status = Status.FAILED;
                        state.schedules.error = action.payload;
                  })



                  .addCase(postSchedule.fulfilled, (state) => {
                        state.schedules.isToRefetch = !state.schedules.isToRefetch;
                  })

                  .addCase(putSchedule.fulfilled, (state) => {
                        state.schedules.isToRefetch = !state.schedules.isToRefetch;
                  })

                  .addCase(deleteSchedule.fulfilled, (state) => {
                        state.schedules.isToRefetch = !state.schedules.isToRefetch;

                  })
      },
})


export default scheduleSlice.reducer;

export const scheduleSliceAction = scheduleSlice.actions;

export const schedulesSliceState = (state: RootState) => state.schedule.schedules;