import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IAppliedCallForPaperDetailedResponse, IAppliedCallForPaperResponse, IAppliedParticipationDetailedResponse, IAppliedParticipationResponse, IAppliedSpeakerBasicResponse, IAppliedSpeakerSessionDetailedResponse, IAppliedSpeakerSessionResponse } from "@/admin/model/appliedHistory/appliedHistoryModel";
import { deleteApplicationCallForPaperSchedule, deleteApplicationParticipationSchedule, deleteApplicationSpeakerSchedule, getApplicationCallForPaper, getApplicationCallForPaperDetailed, getApplicationParticipation, getApplicationParticipationDetailed, getApplicationSpeakerSession, getApplicationSpeakerBasicInfo, getApplicationSpeakerSessionDetailed, putAppliedSpeakerBasicInfo } from "./appliedHistoryRequest";



interface IAppliedSpeakerBasicSlice extends IBasicSliceState {
      data?: IAppliedSpeakerBasicResponse;
}


interface IAppliedParticipationSlice extends IBasicSliceState {
      data: IAppliedParticipationResponse;
}

interface IAppliedSpeakerSessionSlice extends IBasicSliceState {
      data: IAppliedSpeakerSessionResponse;
}

interface IAppliedCallForPaperSlice extends IBasicSliceState {
      data: IAppliedCallForPaperResponse;
}



interface IAppliedParticipationDetailedSlice extends IBasicSliceState {
      data?: IAppliedParticipationDetailedResponse;
}

interface IAppliedSpeakerDetailedSlice extends IBasicSliceState {
      data?: IAppliedSpeakerSessionDetailedResponse;
}

interface IAppliedCallForPaperDetailedSlice extends IBasicSliceState {
      data?: IAppliedCallForPaperDetailedResponse;
}


type IAppliedHistory = {
      appliedSpeakerBasic: IAppliedSpeakerBasicSlice,
      appliedParticipation: IAppliedParticipationSlice,
      appliedSpeakerSession: IAppliedSpeakerSessionSlice,
      appliedCallForPaper: IAppliedCallForPaperSlice,
      appliedParticipationDetailed: IAppliedParticipationDetailedSlice,
      appliedSpeakerDetailed: IAppliedSpeakerDetailedSlice,
      appliedCallForPaperDetailed: IAppliedCallForPaperDetailedSlice,
};



const initialState: IAppliedHistory = {
      appliedSpeakerBasic: {
            status: Status.IDEL,
      },

      appliedParticipation: {
            status: Status.IDEL,
            data: []
      },
      appliedSpeakerSession: {
            status: Status.IDEL,
            data: []
      },
      appliedCallForPaper: {
            status: Status.IDEL,
            data: []
      },

      appliedParticipationDetailed: {
            status: Status.IDEL,
      },
      appliedSpeakerDetailed: {
            status: Status.IDEL,
      },
      appliedCallForPaperDetailed: {
            status: Status.IDEL,
      },
}

const appliedHistorySlice = createSlice({
      name: "appliedHistory",
      initialState,
      reducers: {
            resetAppliedSpeakerBasicSlice: (state) => {
                  state.appliedSpeakerBasic = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },

            resetAppliedParticipationSlice: (state) => {
                  state.appliedParticipation = {
                        status: Status.IDEL,
                        data: []
                  }
            },

            resetAppliedSpeakerSessionSlice: (state) => {
                  state.appliedSpeakerSession = {
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

            resetAppliedParticipationDetailedSlice: (state) => {
                  state.appliedParticipationDetailed = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },

            resetAppliedSpeakerSessionDetailedSlice: (state) => {
                  state.appliedSpeakerDetailed = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },

            resetAppliedCallForPaperDetailedSlice: (state) => {
                  state.appliedCallForPaperDetailed = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getApplicationSpeakerBasicInfo.pending, (state) => {
                        state.appliedSpeakerBasic.status = Status.LOADING;
                  })
                  .addCase(getApplicationSpeakerBasicInfo.fulfilled, (state, action) => {
                        state.appliedSpeakerBasic.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedSpeakerBasic.data = action.payload;

                  })
                  .addCase(getApplicationSpeakerBasicInfo.rejected, (state, action) => {
                        state.appliedSpeakerBasic.status = Status.FAILED;
                        state.appliedSpeakerBasic.error = action.payload;
                  })



                  .addCase(getApplicationSpeakerSession.pending, (state) => {
                        state.appliedSpeakerSession.status = Status.LOADING;
                  })
                  .addCase(getApplicationSpeakerSession.fulfilled, (state, action) => {
                        state.appliedSpeakerSession.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedSpeakerSession.data = action.payload;

                  })
                  .addCase(getApplicationSpeakerSession.rejected, (state, action) => {
                        state.appliedSpeakerSession.status = Status.FAILED;
                        state.appliedSpeakerSession.error = action.payload;
                  })



                  .addCase(getApplicationCallForPaper.pending, (state) => {
                        state.appliedCallForPaper.status = Status.LOADING;
                  })
                  .addCase(getApplicationCallForPaper.fulfilled, (state, action) => {
                        state.appliedCallForPaper.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
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
                        state.appliedParticipation.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedParticipation.data = action.payload;

                  })
                  .addCase(getApplicationParticipation.rejected, (state, action) => {
                        state.appliedParticipation.status = Status.FAILED;
                        state.appliedParticipation.error = action.payload;
                  })



                  .addCase(getApplicationParticipationDetailed.pending, (state) => {
                        state.appliedParticipationDetailed.status = Status.LOADING;
                  })
                  .addCase(getApplicationParticipationDetailed.fulfilled, (state, action) => {
                        state.appliedParticipationDetailed.status = Status.SUCCEEDED;
                        state.appliedParticipationDetailed.data = action.payload;

                  })
                  .addCase(getApplicationParticipationDetailed.rejected, (state, action) => {
                        state.appliedParticipationDetailed.status = Status.FAILED;
                        state.appliedParticipationDetailed.error = action.payload;
                  })


                  .addCase(getApplicationSpeakerSessionDetailed.pending, (state) => {
                        state.appliedSpeakerDetailed.status = Status.LOADING;
                  })
                  .addCase(getApplicationSpeakerSessionDetailed.fulfilled, (state, action) => {
                        state.appliedSpeakerDetailed.status = Status.SUCCEEDED;
                        state.appliedSpeakerDetailed.data = action.payload;

                  })
                  .addCase(getApplicationSpeakerSessionDetailed.rejected, (state, action) => {
                        state.appliedSpeakerDetailed.status = Status.FAILED;
                        state.appliedSpeakerDetailed.error = action.payload;
                  })


                  .addCase(getApplicationCallForPaperDetailed.pending, (state) => {
                        state.appliedCallForPaperDetailed.status = Status.LOADING;
                  })
                  .addCase(getApplicationCallForPaperDetailed.fulfilled, (state, action) => {
                        state.appliedCallForPaperDetailed.status = Status.SUCCEEDED;
                        state.appliedCallForPaperDetailed.data = action.payload;

                  })
                  .addCase(getApplicationCallForPaperDetailed.rejected, (state, action) => {
                        state.appliedCallForPaperDetailed.status = Status.FAILED;
                        state.appliedCallForPaperDetailed.error = action.payload;
                  })




                  .addCase(deleteApplicationParticipationSchedule.fulfilled, (state) => {
                        state.appliedParticipation.isToRefetch = !state.appliedParticipation.isToRefetch
                  })

                  .addCase(deleteApplicationCallForPaperSchedule.fulfilled, (state) => {
                        state.appliedCallForPaper.isToRefetch = !state.appliedCallForPaper.isToRefetch
                  })

                  .addCase(deleteApplicationSpeakerSchedule.fulfilled, (state) => {
                        state.appliedSpeakerSession.isToRefetch = !state.appliedSpeakerSession.isToRefetch
                  })



                  .addCase(putAppliedSpeakerBasicInfo.fulfilled, (state) => {
                        state.appliedSpeakerBasic.isToRefetch = !state.appliedParticipation.isToRefetch
                  })
      },
})


export default appliedHistorySlice.reducer;

export const appliedHistorySliceAction = appliedHistorySlice.actions;

export const appliedHistorySliceState = (state: RootState) => state.appliedHistory;