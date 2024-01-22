import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { postForgotPassword } from "./forgotPasswordRequest";


type IForgotPasswordSlice = IBasicSliceState;


const initialState: IForgotPasswordSlice = {
      status: Status.IDEL,
}

const forgotPasswordSlice = createSlice({
      name: "forgotPassword",
      initialState,
      reducers: {
            resetSlice: (status) => {
                  status.status = Status.IDEL;
                  status.error = undefined;
            }
      },
      extraReducers(builder) {
            builder
                  .addCase(postForgotPassword.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(postForgotPassword.fulfilled, (state) => {
                        state.status = Status.SUCCEEDED

                  })
                  .addCase(postForgotPassword.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      },
})


export default forgotPasswordSlice.reducer;

export const forgotPasswordSliceAction = forgotPasswordSlice.actions;

export const forgotPasswordSliceState = (state: RootState) => state.forgotPassword;