import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { postLogin } from "./loginRequest";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { cookiesStore } from "@/utils/cookiesHandler";

type ILoginSlice = IBasicSliceState;


const initialState: ILoginSlice = {
      status: Status.IDEL,
}

const loginSlice = createSlice({
      name: "login",
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder
                  .addCase(postLogin.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(postLogin.fulfilled, (state, action) => {
                        state.status = Status.SUCCEEDED;

                        cookiesStore.saveItem({ key: "access_token", data: action.payload.accessToken });
                        cookiesStore.saveItem({ key: "refresh_token", data: action.payload.refreshToken });
                  })
                  .addCase(postLogin.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      },
})


export default loginSlice.reducer;

export const loginState = (state: RootState) => state.login;