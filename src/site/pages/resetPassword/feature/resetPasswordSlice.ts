import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { postResetPassword } from "./resetPasswordRequest";


type IResetPasswordSlice = IBasicSliceState;


const initialState: IResetPasswordSlice = {
      status: Status.SUCCEEDED,
}

const resetPasswordSlice = createSlice({
      name: "resetPassword",
      initialState,
      reducers: {
            resetSlice: (status) => {
                  status.status = Status.IDEL;
                  status.error = undefined;
            }
      },
      extraReducers(builder) {
            builder
                  .addCase(postResetPassword.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(postResetPassword.fulfilled, (state) => {
                        state.status = Status.SUCCEEDED

                  })
                  .addCase(postResetPassword.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      },
})


export default resetPasswordSlice.reducer;

export const resetPasswordSliceAction = resetPasswordSlice.actions;

export const resetPasswordSliceState = (state: RootState) => state.resetPassword;