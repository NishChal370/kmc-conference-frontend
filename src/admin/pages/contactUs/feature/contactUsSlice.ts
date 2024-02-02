import { IContactUsResponse } from "@/admin/model/contactUs/contactUsModel";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { createSlice } from "@reduxjs/toolkit";
import { deleteContactUs, fetchContactUs, postContactUs, putContactUs } from "./contactUsRequest";
import { RootState } from "@/app/store";


interface IContactUsSlice extends IBasicSliceState {
      data: IContactUsResponse;
}


type IInitialState = {
      contactUsDetails: IContactUsSlice;
}

const initialState: IInitialState = {
      contactUsDetails: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  contactUs: []
            }
      }
}

const contactUsSlice = createSlice({
      name: "contactUs",
      initialState,
      reducers: {
            resetContactUsDetails: (state) => {
                  state.contactUsDetails = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              contactUs: []
                        }
                  }
            },

      },
      extraReducers(builder) {
            builder
                  .addCase(fetchContactUs.pending, (state) => {
                        state.contactUsDetails.status = Status.LOADING;
                  })
                  .addCase(fetchContactUs.fulfilled, (state, action) => {
                        state.contactUsDetails.status = action.payload.contactUs.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.contactUsDetails.data = action.payload;

                  })
                  .addCase(fetchContactUs.rejected, (state, action) => {
                        state.contactUsDetails.status = Status.FAILED;
                        state.contactUsDetails.error = action.payload;
                  })

                  .addCase(postContactUs.fulfilled, (state) => {
                        state.contactUsDetails.isToRefetch = !state.contactUsDetails.isToRefetch;
                  })

                  .addCase(putContactUs.fulfilled, (state) => {
                        state.contactUsDetails.isToRefetch = !state.contactUsDetails.isToRefetch;
                  })

                  .addCase(deleteContactUs.fulfilled, (state) => {
                        state.contactUsDetails.isToRefetch = !state.contactUsDetails.isToRefetch;

                  })
      }
})


export default contactUsSlice.reducer;

export const contactUsSliceAction = contactUsSlice.actions;

export const contactUsDetailsSliceState = (state: RootState) => state.contactUs.contactUsDetails;
