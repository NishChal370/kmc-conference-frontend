import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./loginRequest";
import { STATUS } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";

type ILoginSlice = IBasicSliceState;


const initialState: ILoginSlice = {
      status: STATUS.Idle,
}

const loginSlice = createSlice({
      name: "login",
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder
                  .addCase(postLogin.pending, (state) => {
                        state.status = STATUS.Loading;
                  })
                  .addCase(postLogin.fulfilled, (state) => {
                        state.status = STATUS.Succeeded;
                  })
                  .addCase(postLogin.rejected, (state, action) => {
                        state.status = STATUS.Failed;
                        state.error = action.payload;
                  })
      },
})


export default loginSlice.reducer;

export const loginState = (state: RootState) => state.login;