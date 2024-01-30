import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IAppliedCallForPaperBasicResponse, IAppliedCallForPaperSessionDetailedResponse, IAppliedCallForPaperSessionResponse, IAppliedParticipationDetailedResponse, IAppliedParticipationResponse, IAppliedSpeakerBasicResponse, IAppliedSpeakerSessionDetailedResponse, IAppliedSpeakerSessionResponse } from "@/admin/model/appliedHistory/appliedHistoryModel";
import {
      deleteApplicationCallForPaperSchedule, deleteApplicationParticipationSchedule, deleteApplicationSpeakerSchedule,
      getApplicationCallForPaperSession, getApplicationCallForPaperSessionDetailed, getApplicationParticipation,
      getApplicationParticipationDetailed, getApplicationSpeakerSession, getApplicationSpeakerBasicInfo, getApplicationSpeakerSessionDetailed,
      putAppliedSpeakerBasicInfo,
      getApplicationCallForPaperBasicInfo,
      putAppliedCallForPaperBasicInfo
} from "./appliedHistoryRequest";



interface IAppliedSpeakerBasicSlice extends IBasicSliceState {
      data?: IAppliedSpeakerBasicResponse;
}

interface IAppliedSpeakerSessionSlice extends IBasicSliceState {
      data: IAppliedSpeakerSessionResponse;
}

interface IAppliedSpeakerDetailedSlice extends IBasicSliceState {
      data?: IAppliedSpeakerSessionDetailedResponse;
}



interface IAppliedCallForPaperBasicSlice extends IBasicSliceState {
      data?: IAppliedCallForPaperBasicResponse;
}


interface IAppliedCallForPaperSessionSlice extends IBasicSliceState {
      data: IAppliedCallForPaperSessionResponse;
}

interface IAppliedCallForPaperSessionDetailedSlice extends IBasicSliceState {
      data?: IAppliedCallForPaperSessionDetailedResponse;
}


interface IAppliedParticipationSlice extends IBasicSliceState {
      data: IAppliedParticipationResponse;
}

interface IAppliedParticipationDetailedSlice extends IBasicSliceState {
      data?: IAppliedParticipationDetailedResponse;
}



type IAppliedHistory = {
      appliedSpeakerBasic: IAppliedSpeakerBasicSlice,
      appliedSpeakerSession: IAppliedSpeakerSessionSlice,
      appliedSpeakerDetailed: IAppliedSpeakerDetailedSlice,
      appliedParticipation: IAppliedParticipationSlice,
      appliedParticipationDetailed: IAppliedParticipationDetailedSlice,
      appliedCallForPaperBasic: IAppliedCallForPaperBasicSlice,
      appliedCallForPaperSession: IAppliedCallForPaperSessionSlice,
      appliedCallForPaperSessionDetailed: IAppliedCallForPaperSessionDetailedSlice,
};



const initialState: IAppliedHistory = {
      appliedSpeakerBasic: {
            status: Status.IDEL,
      },
      appliedSpeakerSession: {
            status: Status.IDEL,
            data: []
      },
      appliedSpeakerDetailed: {
            status: Status.IDEL,
      },

      appliedCallForPaperBasic: {
            status: Status.IDEL,
      },
      appliedCallForPaperSession: {
            status: Status.IDEL,
            data: []
      },

      appliedCallForPaperSessionDetailed: {
            status: Status.IDEL,
      },


      appliedParticipation: {
            status: Status.IDEL,
            data: []
      },

      appliedParticipationDetailed: {
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
            resetAppliedSpeakerSessionSlice: (state) => {
                  state.appliedSpeakerSession = {
                        status: Status.IDEL,
                        data: [],
                  }
            },

            resetAppliedSpeakerSessionDetailedSlice: (state) => {
                  state.appliedSpeakerDetailed = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },




            resetAppliedCallForPaperBasicSlice: (state) => {
                  state.appliedCallForPaperBasic = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
            resetAppliedCallForPaperSlice: (state) => {
                  state.appliedCallForPaperSession = {
                        status: Status.IDEL,
                        data: [],
                  }
            },
            resetAppliedCallForPaperDetailedSlice: (state) => {
                  state.appliedCallForPaperSessionDetailed = {
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

            resetAppliedParticipationDetailedSlice: (state) => {
                  state.appliedParticipationDetailed = {
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

                  .addCase(putAppliedSpeakerBasicInfo.fulfilled, (state) => {
                        state.appliedSpeakerBasic.isToRefetch = !state.appliedParticipation.isToRefetch
                  })

                  .addCase(deleteApplicationSpeakerSchedule.fulfilled, (state) => {
                        state.appliedSpeakerSession.isToRefetch = !state.appliedSpeakerSession.isToRefetch
                  })





                  .addCase(getApplicationCallForPaperBasicInfo.pending, (state) => {
                        state.appliedCallForPaperBasic.status = Status.LOADING;
                  })
                  .addCase(getApplicationCallForPaperBasicInfo.fulfilled, (state, action) => {
                        state.appliedCallForPaperBasic.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedCallForPaperBasic.data = action.payload;

                  })
                  .addCase(getApplicationCallForPaperBasicInfo.rejected, (state, action) => {
                        state.appliedCallForPaperBasic.status = Status.FAILED;
                        state.appliedCallForPaperBasic.error = action.payload;
                  })



                  .addCase(getApplicationCallForPaperSession.pending, (state) => {
                        state.appliedCallForPaperSession.status = Status.LOADING;
                  })
                  .addCase(getApplicationCallForPaperSession.fulfilled, (state, action) => {
                        state.appliedCallForPaperSession.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedCallForPaperSession.data = action.payload;

                  })
                  .addCase(getApplicationCallForPaperSession.rejected, (state, action) => {
                        state.appliedCallForPaperSession.status = Status.FAILED;
                        state.appliedCallForPaperSession.error = action.payload;
                  })


                  .addCase(getApplicationCallForPaperSessionDetailed.pending, (state) => {
                        state.appliedCallForPaperSessionDetailed.status = Status.LOADING;
                  })
                  .addCase(getApplicationCallForPaperSessionDetailed.fulfilled, (state, action) => {
                        state.appliedCallForPaperSessionDetailed.status = Status.SUCCEEDED;
                        state.appliedCallForPaperSessionDetailed.data = action.payload;

                  })
                  .addCase(getApplicationCallForPaperSessionDetailed.rejected, (state, action) => {
                        state.appliedCallForPaperSessionDetailed.status = Status.FAILED;
                        state.appliedCallForPaperSessionDetailed.error = action.payload;
                  })

                  .addCase(putAppliedCallForPaperBasicInfo.fulfilled, (state) => {
                        state.appliedCallForPaperBasic.isToRefetch = !state.appliedCallForPaperBasic.isToRefetch
                  })


                  .addCase(deleteApplicationCallForPaperSchedule.fulfilled, (state) => {
                        state.appliedCallForPaperSession.isToRefetch = !state.appliedCallForPaperSession.isToRefetch
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


                  .addCase(deleteApplicationParticipationSchedule.fulfilled, (state) => {
                        state.appliedParticipation.isToRefetch = !state.appliedParticipation.isToRefetch
                  })
      },
})


export default appliedHistorySlice.reducer;

export const appliedHistorySliceAction = appliedHistorySlice.actions;

export const appliedHistorySliceState = (state: RootState) => state.appliedHistory;