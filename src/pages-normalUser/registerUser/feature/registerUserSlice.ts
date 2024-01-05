import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { postRegisterUser } from "./registerUserRequest";

type IRegisterUserSlice = IBasicSliceState;


const initialState: IRegisterUserSlice = {
      status: STATUS.Idle,
}

const registerUserSlice = createSlice({
      name: "registerUser",
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder
                  .addCase(postRegisterUser.pending, (state) => {
                        state.status = STATUS.Loading;
                  })
                  .addCase(postRegisterUser.fulfilled, (state) => {
                        state.status = STATUS.Succeeded;
                  })
                  .addCase(postRegisterUser.rejected, (state, action) => {
                        state.status = STATUS.Failed;
                        state.error = action.payload;
                  })
      },
})


export default registerUserSlice.reducer;

export const registerUserState = (state: RootState) => state.registerUser;