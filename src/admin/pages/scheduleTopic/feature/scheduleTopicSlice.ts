import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IScheduleTopicsResponse } from "@/admin/model/scheduleTopic/scheduleTopicModel";
import { deleteScheduleTopic, getScheduleTopicContent, getScheduleTopics, postScheduleTopic, putScheduleTopic } from "./scheduleTopicRequest";
import { IScheduleTopicContentResponse } from "@/admin/model/scheduleTopic/scheduleTopicContentModel";

interface IScheduleTopicsSlice extends IBasicSliceState {
      scheduleTopics: IScheduleTopicsResponse;
}


interface IScheduleTopicContentSlice extends IBasicSliceState {
      data?: IScheduleTopicContentResponse;
}


type IScheduleTopicSlice = {
      scheduleTopics: IScheduleTopicsSlice,
      scheduleTopicContent: IScheduleTopicContentSlice,
};


const initialState: IScheduleTopicSlice = {
      scheduleTopics: {
            status: Status.IDEL,
            scheduleTopics: {
                  totalPages: 0,
                  sessionTopics: [],
            }
      },
      scheduleTopicContent: {
            status: Status.IDEL,
            data: undefined,
      }
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

            resetScheduleTopicContentSlice: (state) => {
                  state.scheduleTopicContent = {
                        status: Status.IDEL,
                        data: undefined,
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


                  .addCase(getScheduleTopicContent.pending, (state) => {
                        state.scheduleTopicContent.status = Status.LOADING;
                  })
                  .addCase(getScheduleTopicContent.fulfilled, (state, action) => {
                        state.scheduleTopicContent.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.scheduleTopicContent.data = action.payload;

                  })
                  .addCase(getScheduleTopicContent.rejected, (state, action) => {
                        state.scheduleTopicContent.status = Status.FAILED;
                        state.scheduleTopicContent.error = action.payload;
                  })
      },
})


export default scheduleTopicSlice.reducer;

export const scheduleTopicSliceAction = scheduleTopicSlice.actions;

export const scheduleTopicsSliceState = (state: RootState) => state.scheduleTopic.scheduleTopics;
export const scheduleTopicContentSliceState = (state: RootState) => state.scheduleTopic.scheduleTopicContent;