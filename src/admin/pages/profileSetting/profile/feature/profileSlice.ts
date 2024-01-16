import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { IAdminProfileResponse } from "@/admin/model/profile/adminProfileModel";
import { getAdminProfile, putAdminProfile } from "./profileRequest";


interface IAdminProfileDetailedSlice extends IBasicSliceState {
      data?: IAdminProfileResponse;
}


type IAdminProfileSlice = {
      adminProfileDetail: IAdminProfileDetailedSlice,
};



const initialState: IAdminProfileSlice = {
      adminProfileDetail: {
            status: Status.IDEL,
      },
}


const adminProfileSlice = createSlice({
      name: "adminProfile",
      initialState,
      reducers: {
            resetAdminProfileSlice: (state) => {
                  state.adminProfileDetail = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getAdminProfile.pending, (state) => {
                        state.adminProfileDetail.status = Status.LOADING;
                  })
                  .addCase(getAdminProfile.fulfilled, (state, action) => {
                        state.adminProfileDetail.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;

                        state.adminProfileDetail.data = action.payload;

                  })
                  .addCase(getAdminProfile.rejected, (state, action) => {
                        state.adminProfileDetail.status = Status.FAILED;
                        state.adminProfileDetail.error = action.payload;
                  })


                  .addCase(putAdminProfile.fulfilled, (state) => {
                        state.adminProfileDetail.isToRefetch = !state.adminProfileDetail.isToRefetch;
                  })
      },
})


export default adminProfileSlice.reducer;

export const adminProfileSliceAction = adminProfileSlice.actions;

export const adminProfileDetailSliceState = (state: RootState) => state.adminProfile.adminProfileDetail;