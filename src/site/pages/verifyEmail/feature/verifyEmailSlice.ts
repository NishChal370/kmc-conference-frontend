import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IApiErrorDetail, IBasicSliceState } from "@/models/commonModel";
import { postVerifyEmail } from "./verifyEmailRequest";


type IVerifyEmailSlice = IBasicSliceState;


const initialState: IVerifyEmailSlice = {
      status: Status.IDEL,
}

const verifyEmailSlice = createSlice({
      name: "verifyEmail",
      initialState,
      reducers: {
            resetSlice: (status) => {
                  status.status = Status.IDEL;
                  status.error = undefined;
            }
      },
      extraReducers(builder) {
            builder
                  .addCase(postVerifyEmail.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(postVerifyEmail.fulfilled, (state, action) => {
                        state.status = action.payload.expired || action.payload.requiresPasswordReset
                              ? Status.FAILED
                              : Status.SUCCEEDED

                        state.error = action.payload.expired || action.payload.requiresPasswordReset
                              ? { title: "", detail: "Please try to reset your password" } as IApiErrorDetail
                              : undefined


                  })
                  .addCase(postVerifyEmail.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      },
})


export default verifyEmailSlice.reducer;

export const verifyEmailSliceAction = verifyEmailSlice.actions;

export const verifyEmailSliceState = (state: RootState) => state.verifyEmail;