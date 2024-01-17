import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IScheduleTopicsResponse } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { deleteScheduleTopic, getScheduleTopics, postScheduleTopic, putScheduleTopic } from "./scheduleTopicRequest";

interface IScheduleTopicsSlice extends IBasicSliceState {
      scheduleTopics: IScheduleTopicsResponse;
}


type IScheduleTopicSlice = {
      scheduleTopics: IScheduleTopicsSlice,
};


const initialState: IScheduleTopicSlice = {
      scheduleTopics: {
            status: Status.IDEL,
            scheduleTopics: {
                  totalPages: 0,
                  sessionTopics: [],
            }
      },
}



const scheduleTopicSlice = createSlice({
      name: "scheduleTopic",
      initialState,
      reducers: {
            resetScheduleTopicsSlice: (state) => {
                  state.scheduleTopics = {
                        status: Status.IDEL,
                        scheduleTopics: {
                              totalPages: 0,
                              sessionTopics: []
                        }
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getScheduleTopics.pending, (state) => {
                        state.scheduleTopics.status = Status.LOADING;
                  })
                  .addCase(getScheduleTopics.fulfilled, (state, action) => {
                        state.scheduleTopics.status = action.payload.sessionTopics.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.scheduleTopics.scheduleTopics = action.payload;

                  })
                  .addCase(getScheduleTopics.rejected, (state, action) => {
                        state.scheduleTopics.status = Status.FAILED;
                        state.scheduleTopics.error = action.payload;
                  })



                  .addCase(postScheduleTopic.fulfilled, (state) => {
                        state.scheduleTopics.isToRefetch = !state.scheduleTopics.isToRefetch;
                  })

                  .addCase(putScheduleTopic.fulfilled, (state) => {
                        state.scheduleTopics.isToRefetch = !state.scheduleTopics.isToRefetch;
                  })

                  .addCase(deleteScheduleTopic.fulfilled, (state) => {
                        state.scheduleTopics.isToRefetch = !state.scheduleTopics.isToRefetch;

                  })
      },
})


export default scheduleTopicSlice.reducer;

export const scheduleTopicSliceAction = scheduleTopicSlice.actions;

export const scheduleTopicsSliceState = (state: RootState) => state.scheduleTopic.scheduleTopics;