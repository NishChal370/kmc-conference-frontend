import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IScheduleContentDetailResponse, ISchedulesResponse } from "@/admin/model/schedule/scheduleModel";
import { deleteSchedule, getScheduleContentDetail, getSchedules, postSchedule, putSchedule } from "./scheduleRequest";

interface ISchedulesSlice extends IBasicSliceState {
      data: ISchedulesResponse;
}


interface IScheduleContentDetailSlice extends IBasicSliceState {
      data: IScheduleContentDetailResponse;
}


type IScheduleSlice = {
      schedules: ISchedulesSlice,
      scheduleContentDetail: IScheduleContentDetailSlice,
};


const initialState: IScheduleSlice = {
      schedules: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  sessions: []
            }
      },
      scheduleContentDetail: {
            status: Status.IDEL,
            data: [],
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
            resetScheduleContentDetailsSlice: (state) => {
                  state.scheduleContentDetail = {
                        status: Status.IDEL,
                        data: [],
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



                  .addCase(getScheduleContentDetail.pending, (state) => {
                        state.scheduleContentDetail.status = Status.LOADING;
                  })
                  .addCase(getScheduleContentDetail.fulfilled, (state, action) => {
                        state.scheduleContentDetail.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.scheduleContentDetail.data = action.payload;

                  })
                  .addCase(getScheduleContentDetail.rejected, (state, action) => {
                        state.scheduleContentDetail.status = Status.FAILED;
                        state.scheduleContentDetail.error = action.payload;
                  })
      },
})


export default scheduleSlice.reducer;

export const scheduleSliceAction = scheduleSlice.actions;

export const schedulesSliceState = (state: RootState) => state.schedule.schedules;
export const scheduleContentDetailSliceState = (state: RootState) => state.schedule.scheduleContentDetail;