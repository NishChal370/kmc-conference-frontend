import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISchedulesResponse } from "@/admin/model/schedule/scheduleModel";
import { deleteSchedule, getScheduleContentBriefDetail, getScheduleContentDetail, getScheduleContentPrivateDetail, getSchedules, postSchedule, putSchedule } from "./scheduleRequest";
import { IScheduleContentBriefDetailResponse, IScheduleContentDetailPrivateResponse } from "@/admin/model/schedule/scheduleContentModel";

interface ISchedulesSlice extends IBasicSliceState {
      data: ISchedulesResponse;
}


interface IScheduleContentDetailSlice extends IBasicSliceState {
      data: IScheduleContentDetailPrivateResponse; // it stores both private and public data.
}

interface IScheduleContentBriefDetailSlice extends IBasicSliceState {
      data?: IScheduleContentBriefDetailResponse;
}


type IScheduleSlice = {
      schedules: ISchedulesSlice,
      scheduleContentDetail: IScheduleContentDetailSlice,
      scheduleContentBriefDetail: IScheduleContentBriefDetailSlice,
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
            data: { themeContents: [] },
      },
      scheduleContentBriefDetail: {
            status: Status.IDEL,
            data: undefined
      }
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
                        data: { themeContents: [] },
                  }
            },

            refetchScheduleContentDetails: (state) => {
                  state.scheduleContentDetail.isToRefetch = !state.scheduleContentDetail.isToRefetch;
            },

            resetScheduleContentBriefDetailsSlice: (state) => {
                  state.scheduleContentBriefDetail = {
                        status: Status.IDEL,
                        data: undefined,
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
                        state.scheduleContentDetail.data = { themeContents: action.payload };

                  })
                  .addCase(getScheduleContentDetail.rejected, (state, action) => {
                        state.scheduleContentDetail.status = Status.FAILED;
                        state.scheduleContentDetail.error = action.payload;
                  })



                  .addCase(getScheduleContentPrivateDetail.pending, (state) => {
                        state.scheduleContentDetail.status = Status.LOADING;
                  })
                  .addCase(getScheduleContentPrivateDetail.fulfilled, (state, action) => {
                        state.scheduleContentDetail.status = action.payload.themeContents.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.scheduleContentDetail.data = action.payload;

                  })
                  .addCase(getScheduleContentPrivateDetail.rejected, (state, action) => {
                        state.scheduleContentDetail.status = Status.FAILED;
                        state.scheduleContentDetail.error = action.payload;
                  })


                  .addCase(getScheduleContentBriefDetail.pending, (state) => {
                        state.scheduleContentBriefDetail.status = Status.LOADING;
                  })
                  .addCase(getScheduleContentBriefDetail.fulfilled, (state, action) => {
                        state.scheduleContentBriefDetail.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.scheduleContentBriefDetail.data = action.payload;

                  })
                  .addCase(getScheduleContentBriefDetail.rejected, (state, action) => {
                        state.scheduleContentBriefDetail.status = Status.FAILED;
                        state.scheduleContentBriefDetail.error = action.payload;
                  })
      },
})


export default scheduleSlice.reducer;

export const scheduleSliceAction = scheduleSlice.actions;

export const schedulesSliceState = (state: RootState) => state.schedule.schedules;
export const scheduleContentDetailSliceState = (state: RootState) => state.schedule.scheduleContentDetail;
export const scheduleContentBriefDetailSliceState = (state: RootState) => state.schedule.scheduleContentBriefDetail;