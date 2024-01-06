import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { ApiStatus } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { postRegisterUser } from "./registerUserRequest";

type IRegisterUserSlice = IBasicSliceState;


const initialState: IRegisterUserSlice = {
      status: ApiStatus.IDEL,
}

const registerUserSlice = createSlice({
      name: "registerUser",
      initialState,
      reducers: {},
      extraReducers(builder) {
            builder
                  .addCase(postRegisterUser.pending, (state) => {
                        state.status = ApiStatus.LOADING;
                  })
                  .addCase(postRegisterUser.fulfilled, (state) => {
                        state.status = ApiStatus.SUCCEEDED;
                  })
                  .addCase(postRegisterUser.rejected, (state, action) => {
                        state.status = ApiStatus.FAILED;
                        state.error = action.payload;
                  })
      },
})


export default registerUserSlice.reducer;

export const registerUserState = (state: RootState) => state.registerUser;