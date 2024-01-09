import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { getSpeakerBasicInfo, putAdminSpeakerFullDetail } from "./speakerRequest";
import { ISpeakerBasicInfoResponse } from "@/models/speaker/SpeakerModel";


interface ISpeakerBasicInfoSlice extends IBasicSliceState {
      data: ISpeakerBasicInfoResponse
}

type ISpeakerSlice = {
      speakerBasicInfo: ISpeakerBasicInfoSlice
};



const initialState: ISpeakerSlice = {
      speakerBasicInfo: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  speakers: []
            }
      }
}

const speakerSlice = createSlice({
      name: "speaker",
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder
                  .addCase(getSpeakerBasicInfo.pending, (state) => {
                        state.speakerBasicInfo.status = Status.LOADING;
                  })
                  .addCase(getSpeakerBasicInfo.fulfilled, (state, action) => {
                        state.speakerBasicInfo.status = Status.SUCCEEDED;
                        state.speakerBasicInfo.data = action.payload;

                  })
                  .addCase(getSpeakerBasicInfo.rejected, (state, action) => {
                        state.speakerBasicInfo.status = Status.FAILED;
                        state.speakerBasicInfo.error = action.payload;
                  })

                  .addCase(putAdminSpeakerFullDetail.fulfilled, (state) => {
                        state.speakerBasicInfo.isToRefetch = !state.speakerBasicInfo.isToRefetch;
                  })
      },
})


export default speakerSlice.reducer;

export const speakerState = (state: RootState) => state.speaker;