import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { IBasicSliceState } from "@/models/commonModel";
import { IApplicationsStatisticResponse } from "@/admin/model/applicantsStatistic/applicantsStatisticModel";
import { Status } from "@/enum/commonEnum";
import { getApplicantsStatistic } from "./applicantsStatisticRequest";

interface IApplicantsStatisticSlice extends IBasicSliceState {
      data: IApplicationsStatisticResponse
}


const initialState: IApplicantsStatisticSlice = {
      status: Status.IDEL,
      data: {
            totalParticipant: 0,
            totalProposal: 0,
            totalSpeaker: 0,
            topSessions: [],
      }
}


const applicantsStatisticSlice = createSlice({
      name: "applicantsStatistic",
      initialState,
      reducers: {
            resetSlice: (state) => {
                  state.status = Status.IDEL,
                        state.data = {
                              totalParticipant: 0,
                              totalProposal: 0,
                              totalSpeaker: 0,
                              topSessions: [],
                        }
            }
      },

      extraReducers(builder) {
            builder
                  .addCase(getApplicantsStatistic.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(getApplicantsStatistic.fulfilled, (state, action) => {
                        state.status = Status.SUCCEEDED;
                        state.data = action.payload;

                  })
                  .addCase(getApplicantsStatistic.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      }
})

export default applicantsStatisticSlice.reducer;

export const applicantsStatisticSliceAction = applicantsStatisticSlice.actions;

export const applicantsStatisticSliceState = (state: RootState) => state.applicantsStatistic;