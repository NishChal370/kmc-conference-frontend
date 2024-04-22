import { IVerifyUserResponse } from "@/admin/model/verifyApplicant/verifyApplicantModel";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { createSlice } from "@reduxjs/toolkit";
import { postVerifyApplicant } from "./verifyApplicantRequest";
import { RootState } from "@/app/store";

interface IVerifyApplicantSlice extends IBasicSliceState {
      data?: IVerifyUserResponse;
}


const initialState: IVerifyApplicantSlice = {
      status: Status.IDEL,
      data: undefined
}

const verifyApplicantSlice = createSlice({
      name: "verifyApplicant",
      initialState,
      reducers: {
            resetSlice: (state) => {
                  state.status = Status.IDEL;
                  state.data = undefined;
                  state.error = undefined;
            }
      },
      extraReducers(builder) {
            builder
                  .addCase(postVerifyApplicant.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(postVerifyApplicant.fulfilled, (state, action) => {
                        state.status = Status.SUCCEEDED;
                        state.data = action.payload;

                  })
                  .addCase(postVerifyApplicant.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      },
})

export default verifyApplicantSlice.reducer;

export const verifyApplicantSliceAction = verifyApplicantSlice.actions;

export const verifyApplicantSliceState = (state: RootState) => state.verifyApplicant;