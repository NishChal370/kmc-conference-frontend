import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IAppliedCallForPaperResponse, IAppliedParticipationResponse, IAppliedSpeakerResponse } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { getApplicationCallForPaper, getApplicationParticipation, getApplicationSpeaker } from "./appliedHistoryRequest";


interface IAppliedParticipationSlice extends IBasicSliceState {
      data: IAppliedParticipationResponse;
}

interface IAppliedSpeakerSlice extends IBasicSliceState {
      data: IAppliedSpeakerResponse;
}

interface IAppliedCallForPaperSlice extends IBasicSliceState {
      data: IAppliedCallForPaperResponse;
}


type IAppliedHistory = {
      appliedParticipation: IAppliedParticipationSlice,
      appliedSpeaker: IAppliedSpeakerSlice,
      appliedCallForPaper: IAppliedCallForPaperSlice,
};



const initialState: IAppliedHistory = {
      appliedParticipation: {
            status: Status.IDEL,
            data: []
      },
      appliedSpeaker: {
            status: Status.IDEL,
            data: []
      },
      appliedCallForPaper: {
            status: Status.IDEL,
            data: []
      },
}

const appliedHistorySlice = createSlice({
      name: "appliedHistory",
      initialState,
      reducers: {
            resetAppliedParticipationSlice: (state) => {
                  state.appliedParticipation = {
                        status: Status.IDEL,
                        data: []
                  }
            },

            resetAppliedSpeakerSlice: (state) => {
                  state.appliedSpeaker = {
                        status: Status.IDEL,
                        data: [],
                  }
            },

            resetAppliedCallForPaperSlice: (state) => {
                  state.appliedCallForPaper = {
                        status: Status.IDEL,
                        data: [],
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getApplicationSpeaker.pending, (state) => {
                        state.appliedSpeaker.status = Status.LOADING;
                  })
                  .addCase(getApplicationSpeaker.fulfilled, (state, action) => {
                        state.appliedSpeaker.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedSpeaker.data = action.payload;

                  })
                  .addCase(getApplicationSpeaker.rejected, (state, action) => {
                        state.appliedSpeaker.status = Status.FAILED;
                        state.appliedSpeaker.error = action.payload;
                  })



                  .addCase(getApplicationCallForPaper.pending, (state) => {
                        state.appliedCallForPaper.status = Status.LOADING;
                  })
                  .addCase(getApplicationCallForPaper.fulfilled, (state, action) => {
                        state.appliedCallForPaper.status = Status.SUCCEEDED;
                        state.appliedCallForPaper.data = action.payload;

                  })
                  .addCase(getApplicationCallForPaper.rejected, (state, action) => {
                        state.appliedCallForPaper.status = Status.FAILED;
                        state.appliedCallForPaper.error = action.payload;
                  })




                  .addCase(getApplicationParticipation.pending, (state) => {
                        state.appliedParticipation.status = Status.LOADING;
                  })
                  .addCase(getApplicationParticipation.fulfilled, (state, action) => {
                        state.appliedParticipation.status = Status.SUCCEEDED;
                        state.appliedParticipation.data = action.payload;

                  })
                  .addCase(getApplicationParticipation.rejected, (state, action) => {
                        state.appliedParticipation.status = Status.FAILED;
                        state.appliedParticipation.error = action.payload;
                  })
      },
})


export default appliedHistorySlice.reducer;

export const appliedHistorySliceAction = appliedHistorySlice.actions;

export const appliedHistorySliceState = (state: RootState) => state.appliedHistory;