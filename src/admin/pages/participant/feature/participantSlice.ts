import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IParticipantBasicResponse, IParticipantByIdResponse } from "@/admin/model/participant/participantModel";
import { deleteParticipantDetail, getParticipantBasicInfo, getParticipantDetailedById, postParticipation } from "./participantRequest";


interface IParticipantBasicSlice extends IBasicSliceState {
      data: IParticipantBasicResponse
}

interface IParticipantDetailedSlice extends IBasicSliceState {
      data?: IParticipantByIdResponse;
}


type IParticipantSlice = {
      participantBasicInfo: IParticipantBasicSlice,
      participantDetailedInfo: IParticipantDetailedSlice
};



const initialState: IParticipantSlice = {
      participantBasicInfo: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  participants: []
            }
      },
      participantDetailedInfo: {
            status: Status.IDEL,
      },
}

const participantSlice = createSlice({
      name: "participant",
      initialState,
      reducers: {
            resetParticipantBasicInfoSlice: (state) => {
                  state.participantBasicInfo = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              participants: []
                        }
                  }
            },

            resetParticipantDetailedInfoSlice: (state) => {
                  state.participantDetailedInfo = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getParticipantBasicInfo.pending, (state) => {
                        state.participantBasicInfo.status = Status.LOADING;
                  })
                  .addCase(getParticipantBasicInfo.fulfilled, (state, action) => {
                        state.participantBasicInfo.status = action.payload.participants.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.participantBasicInfo.data = action.payload;

                  })
                  .addCase(getParticipantBasicInfo.rejected, (state, action) => {
                        state.participantBasicInfo.status = Status.FAILED;
                        state.participantBasicInfo.error = action.payload;
                  })



                  .addCase(getParticipantDetailedById.pending, (state) => {
                        state.participantDetailedInfo.status = Status.LOADING;
                  })
                  .addCase(getParticipantDetailedById.fulfilled, (state, action) => {
                        state.participantDetailedInfo.status = Status.SUCCEEDED;
                        state.participantDetailedInfo.data = action.payload;

                  })
                  .addCase(getParticipantDetailedById.rejected, (state, action) => {
                        state.participantDetailedInfo.status = Status.FAILED;
                        state.participantDetailedInfo.error = action.payload;
                  })




                  .addCase(deleteParticipantDetail.fulfilled, (state) => {
                        state.participantBasicInfo.isToRefetch = !state.participantBasicInfo.isToRefetch;
                  })
      },
})


export default participantSlice.reducer;

export const participantSliceAction = participantSlice.actions;

export const participantBasicInfoSliceState = (state: RootState) => state.participant.participantBasicInfo;
export const participantDetailedSliceState = (state: RootState) => state.participant.participantDetailedInfo;