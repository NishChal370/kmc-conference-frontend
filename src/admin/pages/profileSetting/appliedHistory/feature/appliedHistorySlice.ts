import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import {
      IAppliedCallForPaperBasicResponse, IAppliedCallForPaperSessionDetailedResponse, IAppliedCallForPaperSessionResponse, IAppliedParticipationBasicResponse, IAppliedParticipationSessionDetailedResponse,
      IAppliedParticipationSessionResponse, IAppliedSpeakerBasicResponse, IAppliedSpeakerSessionDetailedResponse, IAppliedSpeakerSessionResponse
} from "@/admin/model/appliedHistory/appliedHistoryModel";
import {
      deleteApplicationCallForPaperSchedule, deleteApplicationParticipationSchedule, deleteApplicationSpeakerSchedule,
      getApplicationCallForPaperSession, getApplicationCallForPaperSessionDetailed, getApplicationParticipationSessions,
      getApplicationParticipationSessionDetailed, getApplicationSpeakerSession, getApplicationSpeakerBasicInfo, getApplicationSpeakerSessionDetailed,
      putAppliedSpeakerBasicInfo,
      getApplicationCallForPaperBasicInfo,
      putAppliedCallForPaperBasicInfo,
      getApplicationParticipationBasicInfo,
      putAppliedParticipationBasicInfo
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



interface IAppliedParticipationBasicSlice extends IBasicSliceState {
      data?: IAppliedParticipationBasicResponse;
}



interface IAppliedParticipationSessionsSlice extends IBasicSliceState {
      data: IAppliedParticipationSessionResponse;
}

interface IAppliedParticipationSessionDetailedSlice extends IBasicSliceState {
      data?: IAppliedParticipationSessionDetailedResponse;
}



type IAppliedHistory = {
      appliedSpeakerBasic: IAppliedSpeakerBasicSlice,
      appliedSpeakerSession: IAppliedSpeakerSessionSlice,
      appliedSpeakerDetailed: IAppliedSpeakerDetailedSlice,
      appliedParticipationBasic: IAppliedParticipationBasicSlice,
      appliedParticipationSessions: IAppliedParticipationSessionsSlice,
      appliedParticipationSessionDetailed: IAppliedParticipationSessionDetailedSlice,
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

      appliedParticipationBasic: {
            status: Status.IDEL,
      },
      appliedParticipationSessions: {
            status: Status.IDEL,
            data: []
      },
      appliedParticipationSessionDetailed: {
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


            resetAppliedParticipationBasicSlice: (state) => {
                  state.appliedParticipationBasic = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
            resetAppliedParticipationSessionsSlice: (state) => {
                  state.appliedParticipationSessions = {
                        status: Status.IDEL,
                        data: []
                  }
            },
            resetAppliedParticipationSessionDetailedSlice: (state) => {
                  state.appliedParticipationSessionDetailed = {
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
                        state.appliedSpeakerBasic.status = action.payload?.status === 404
                              ? Status.DATA_NOT_FOUND
                              : Status.FAILED;
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
                        state.appliedSpeakerDetailed.status = action.payload?.status === 404
                              ? Status.DATA_NOT_FOUND
                              : Status.FAILED;
                        state.appliedSpeakerDetailed.error = action.payload;
                  })

                  .addCase(putAppliedSpeakerBasicInfo.fulfilled, (state) => {
                        state.appliedSpeakerBasic.isToRefetch = !state.appliedSpeakerBasic.isToRefetch
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
                        state.appliedCallForPaperBasic.status = action.payload?.status === 404
                              ? Status.DATA_NOT_FOUND
                              : Status.FAILED;
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
                        state.appliedCallForPaperSessionDetailed.status = action.payload?.status === 404
                              ? Status.DATA_NOT_FOUND
                              : Status.FAILED;
                        state.appliedCallForPaperSessionDetailed.error = action.payload;
                  })

                  .addCase(putAppliedCallForPaperBasicInfo.fulfilled, (state) => {
                        state.appliedCallForPaperBasic.isToRefetch = !state.appliedCallForPaperBasic.isToRefetch
                  })


                  .addCase(deleteApplicationCallForPaperSchedule.fulfilled, (state) => {
                        state.appliedCallForPaperSession.isToRefetch = !state.appliedCallForPaperSession.isToRefetch
                  })




                  .addCase(getApplicationParticipationBasicInfo.pending, (state) => {
                        state.appliedParticipationBasic.status = Status.LOADING;
                  })
                  .addCase(getApplicationParticipationBasicInfo.fulfilled, (state, action) => {
                        state.appliedParticipationBasic.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedParticipationBasic.data = action.payload;

                  })
                  .addCase(getApplicationParticipationBasicInfo.rejected, (state, action) => {
                        state.appliedParticipationBasic.status = action.payload?.status === 404
                              ? Status.DATA_NOT_FOUND
                              : Status.FAILED;
                        state.appliedParticipationBasic.error = action.payload;
                  })


                  .addCase(getApplicationParticipationSessions.pending, (state) => {
                        state.appliedParticipationSessions.status = Status.LOADING;
                  })
                  .addCase(getApplicationParticipationSessions.fulfilled, (state, action) => {
                        state.appliedParticipationSessions.status = action.payload.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.appliedParticipationSessions.data = action.payload;

                  })
                  .addCase(getApplicationParticipationSessions.rejected, (state, action) => {
                        state.appliedParticipationSessions.status = Status.FAILED;
                        state.appliedParticipationSessions.error = action.payload;
                  })



                  .addCase(getApplicationParticipationSessionDetailed.pending, (state) => {
                        state.appliedParticipationSessionDetailed.status = Status.LOADING;
                  })
                  .addCase(getApplicationParticipationSessionDetailed.fulfilled, (state, action) => {
                        state.appliedParticipationSessionDetailed.status = Status.SUCCEEDED;
                        state.appliedParticipationSessionDetailed.data = action.payload;

                  })
                  .addCase(getApplicationParticipationSessionDetailed.rejected, (state, action) => {
                        state.appliedParticipationSessionDetailed.status = action.payload?.status === 404
                              ? Status.DATA_NOT_FOUND
                              : Status.FAILED;
                        state.appliedParticipationSessionDetailed.error = action.payload;
                  })




                  .addCase(putAppliedParticipationBasicInfo.fulfilled, (state) => {
                        state.appliedParticipationBasic.isToRefetch = !state.appliedParticipationBasic.isToRefetch
                  })

                  .addCase(deleteApplicationParticipationSchedule.fulfilled, (state) => {
                        state.appliedParticipationSessionDetailed.isToRefetch = !state.appliedParticipationSessionDetailed.isToRefetch
                  })
      },
})


export default appliedHistorySlice.reducer;

export const appliedHistorySliceAction = appliedHistorySlice.actions;

export const appliedHistorySliceState = (state: RootState) => state.appliedHistory;