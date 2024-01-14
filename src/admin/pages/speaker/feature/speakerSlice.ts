import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISpeakerBasicResponse, ISpeakerByIdResponse } from "@/admin/model/speaker/adminSpeakerModel";
import { deleteSpeakerDetail, getSpeakerBasicInfo, getSpeakerDetailedById, putAdminSpeakerApprovalStatus, putAdminSpeakerFullDetail } from "./speakerRequest";


interface ISpeakerBasicSlice extends IBasicSliceState {
      data: ISpeakerBasicResponse
}

interface ISpeakerDetailedSlice extends IBasicSliceState {
      data?: ISpeakerByIdResponse;
}


type ISpeakerSlice = {
      speakerBasicInfo: ISpeakerBasicSlice,
      speakerDetailedInfo: ISpeakerDetailedSlice
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



                  .addCase(putAdminSpeakerFullDetail.fulfilled, (state) => {
                        state.speakerBasicInfo.isToRefetch = !state.speakerBasicInfo.isToRefetch;
                  })

                  .addCase(putAdminSpeakerApprovalStatus.fulfilled, (state) => {
                        state.speakerBasicInfo.isToRefetch = !state.speakerBasicInfo.isToRefetch;
                  })

                  .addCase(deleteSpeakerDetail.fulfilled, (state) => {
                        state.speakerBasicInfo.isToRefetch = !state.speakerBasicInfo.isToRefetch;
                  })
      },
})


export default speakerSlice.reducer;

export const speakerSliceAction = speakerSlice.actions;

export const speakerBasicInfoSliceState = (state: RootState) => state.speaker.speakerBasicInfo;
export const speakerDetailedSliceState = (state: RootState) => state.speaker.speakerDetailedInfo;