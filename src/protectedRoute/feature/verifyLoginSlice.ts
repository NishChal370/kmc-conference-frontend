import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { Status } from '@/enum/commonEnum';
import { cookiesStore } from '@/utils/cookiesHandler';
import { IBasicSliceState } from '@/models/commonModel';
import { fetchUserLogout, fetchVeryLogin } from './verifyLoginRequest';


const initialState: IBasicSliceState = {
      status: Status.IDEL,
}


const verifyLoginSlice = createSlice({
      name: "verifyLogin",
      initialState,
      reducers: {
            changeVerifyLoginStatus(state, status: PayloadAction<Status>) {
                  state.status = status.payload;
            }
      },
      extraReducers(builder) {
            builder
                  .addCase(fetchVeryLogin.pending, (state) => {
                        state.error = undefined;
                        state.status = Status.LOADING;
                  })
                  .addCase(fetchVeryLogin.fulfilled, (state) => {
                        state.status = Status.SUCCEEDED;
                  })
                  .addCase(fetchVeryLogin.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;

                        cookiesStore.deleteItem("access_token");
                        cookiesStore.deleteItem("refresh_token");
                  })


                  .addCase(fetchUserLogout.pending, (state) => {
                        state.error = undefined;
                        state.status = Status.LOADING;
                  })
                  .addCase(fetchUserLogout.fulfilled, (state) => {
                        // changing status to Failed helps to change page to login through PrivateRoute.
                        state.status = Status.FAILED;

                        cookiesStore.deleteItem("access_token");
                        cookiesStore.deleteItem("refresh_token");
                  })
                  .addCase(fetchUserLogout.rejected, (state) => {
                        // this helps to stay in private route pages.
                        // if logout is failed.
                        state.status = Status.SUCCEEDED;
                  })
      },
})


export default verifyLoginSlice.reducer;
export const { changeVerifyLoginStatus } = verifyLoginSlice.actions;

export const verifyLoginState = (state: RootState) => state.verifyLogin;