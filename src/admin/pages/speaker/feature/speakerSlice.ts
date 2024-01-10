import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ISpeakerBasicInfoResponse } from "@/models/speaker/SpeakerModel";
import { IAdminSpeakerFullDetailedInfoByIdResponse } from "@/admin/model/speaker/adminSpeakerModel";
import { deleteSpeakerDetail, getAdminSpeakerFullDetailedInfo, getSpeakerBasicInfo, putAdminSpeakerApprovalStatus, putAdminSpeakerFullDetail } from "./speakerRequest";


interface ISpeakerBasicInfoSlice extends IBasicSliceState {
      data: ISpeakerBasicInfoResponse
}

interface ISpeakerFullDetailedInfoSlice extends IBasicSliceState {
      data?: IAdminSpeakerFullDetailedInfoByIdResponse
}


type ISpeakerSlice = {
      speakerBasicInfo: ISpeakerBasicInfoSlice,
      speakerFullDetailedInfo: ISpeakerFullDetailedInfoSlice
};



const initialState: ISpeakerSlice = {
      speakerBasicInfo: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  speakers: []
            }
      },
      speakerFullDetailedInfo: {
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

            resetSpeakerFullDetailedInfoSlice: (state) => {
                  state.speakerFullDetailedInfo = {
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



                  .addCase(getAdminSpeakerFullDetailedInfo.pending, (state) => {
                        state.speakerFullDetailedInfo.status = Status.LOADING;
                  })
                  .addCase(getAdminSpeakerFullDetailedInfo.fulfilled, (state, action) => {
                        state.speakerFullDetailedInfo.status = Status.SUCCEEDED;
                        state.speakerFullDetailedInfo.data = action.payload;

                  })
                  .addCase(getAdminSpeakerFullDetailedInfo.rejected, (state, action) => {
                        state.speakerFullDetailedInfo.status = Status.FAILED;
                        state.speakerFullDetailedInfo.error = action.payload;
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

export const speakerState = (state: RootState) => state.speaker;