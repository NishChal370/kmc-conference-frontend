import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISpeakerBasicResponse, ISpeakerByIdResponse } from "@/admin/model/speaker/speakerModel";
import { ISpeakerContentDetailResponse, ISpeakersContentResponse } from "@/admin/model/speaker/speakerContentModel";
import { getSpeakerContentDetail, getSpeakersContent } from "./speakerContentRequest";
import { deleteSpeakerDetail, getSpeakerBasicInfo, getSpeakerDetailedById } from "./speakerRequest";
import { putSpeakerBasicDetail } from "./speakerRequest";

interface ISpeakerBasicSlice extends IBasicSliceState {
      data: ISpeakerBasicResponse
}

interface ISpeakerDetailedSlice extends IBasicSliceState {
      data?: ISpeakerByIdResponse;
}


interface ISpeakersContentSlice extends IBasicSliceState {
      data: ISpeakersContentResponse
}



interface ISpeakerContentDetailSlice extends IBasicSliceState {
      data?: ISpeakerContentDetailResponse
}


type ISpeakerSlice = {
      speakerBasicInfo: ISpeakerBasicSlice,
      speakerDetailedInfo: ISpeakerDetailedSlice,
      speakersContent: ISpeakersContentSlice,
      speakerContentDetail: ISpeakerContentDetailSlice,
};



const initialState: ISpeakerSlice = {
      speakerBasicInfo: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  speakers: []
            }
      },

      speakerDetailedInfo: {
            status: Status.IDEL,
      },

      speakersContent: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  speakers: [],
            }
      },

      speakerContentDetail: {
            status: Status.IDEL,
            data: undefined,
      }
}

const speakerSlice = createSlice({
      name: "speaker",
      initialState,
      reducers: {
            resetSpeakerBasicInfoSlice: (state) => {
                  state.speakerBasicInfo = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              speakers: []
                        }
                  }
            },

            resetSpeakerDetailedInfoSlice: (state) => {
                  state.speakerDetailedInfo = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },

            resetSpeakersContentSlice: (state) => {
                  state.speakersContent = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              speakers: [],
                        }
                  }
            },

            resetSpeakerContentSlice: (state) => {
                  state.speakerContentDetail = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getSpeakerBasicInfo.pending, (state) => {
                        state.speakerBasicInfo.status = Status.LOADING;
                  })
                  .addCase(getSpeakerBasicInfo.fulfilled, (state, action) => {
                        state.speakerBasicInfo.status = action.payload.speakers.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.speakerBasicInfo.data = action.payload;

                  })
                  .addCase(getSpeakerBasicInfo.rejected, (state, action) => {
                        state.speakerBasicInfo.status = Status.FAILED;
                        state.speakerBasicInfo.error = action.payload;
                  })



                  .addCase(getSpeakerDetailedById.pending, (state) => {
                        state.speakerDetailedInfo.status = Status.LOADING;
                  })
                  .addCase(getSpeakerDetailedById.fulfilled, (state, action) => {
                        state.speakerDetailedInfo.status = Status.SUCCEEDED;
                        state.speakerDetailedInfo.data = action.payload;

                  })
                  .addCase(getSpeakerDetailedById.rejected, (state, action) => {
                        state.speakerDetailedInfo.status = Status.FAILED;
                        state.speakerDetailedInfo.error = action.payload;
                  })





                  .addCase(putSpeakerBasicDetail.fulfilled, (state) => {
                        state.speakerBasicInfo.isToRefetch = !state.speakerBasicInfo.isToRefetch;
                  })

                  .addCase(deleteSpeakerDetail.fulfilled, (state) => {
                        state.speakerBasicInfo.isToRefetch = !state.speakerBasicInfo.isToRefetch;
                  })



                  .addCase(getSpeakersContent.pending, (state) => {
                        state.speakersContent.status = Status.LOADING;
                  })
                  .addCase(getSpeakersContent.fulfilled, (state, action) => {
                        state.speakersContent.status = action.payload.speakers.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;

                        state.speakersContent.data = action.payload;
                  })
                  .addCase(getSpeakersContent.rejected, (state, action) => {
                        state.speakersContent.status = Status.FAILED;
                        state.speakersContent.error = action.payload;
                  })




                  .addCase(getSpeakerContentDetail.pending, (state) => {
                        state.speakerContentDetail.status = Status.LOADING;
                  })
                  .addCase(getSpeakerContentDetail.fulfilled, (state, action) => {
                        state.speakerContentDetail.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.speakerContentDetail.data = action.payload;

                  })
                  .addCase(getSpeakerContentDetail.rejected, (state, action) => {
                        state.speakerContentDetail.status = Status.FAILED;
                        state.speakerContentDetail.error = action.payload;
                  })
      },
})


export default speakerSlice.reducer;

export const speakerSliceAction = speakerSlice.actions;

export const speakerBasicInfoSliceState = (state: RootState) => state.speaker.speakerBasicInfo;
export const speakerDetailedSliceState = (state: RootState) => state.speaker.speakerDetailedInfo;

export const speakersContentSliceState = (state: RootState) => state.speaker.speakersContent;
export const speakerContentDetailSliceState = (state: RootState) => state.speaker.speakerContentDetail;