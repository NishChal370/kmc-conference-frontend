import { RootState } from "@/app/store";
import { createSlice } from "@reduxjs/toolkit";
import { Status } from "@/enum/commonEnum";
import { IBasicSliceState } from "@/models/commonModel";
import { ICallForPaperBasicResponse, ICallForPaperByIdResponse } from "@/admin/model/callForPaper/callForPaperModel";
import { deleteCallForPaperDetail, getCallForPaperBasicInfo, getCallForPaperDetailedById } from "./callForPaperRequest";


interface ICallForPaperBasicSlice extends IBasicSliceState {
      data: ICallForPaperBasicResponse
}

interface ICallForPaperDetailedSlice extends IBasicSliceState {
      data?: ICallForPaperByIdResponse;
}


type ICallForPaperSlice = {
      callForPaperBasicInfo: ICallForPaperBasicSlice,
      callForPaperDetailedInfo: ICallForPaperDetailedSlice
};



const initialState: ICallForPaperSlice = {
      callForPaperBasicInfo: {
            status: Status.IDEL,
            data: {
                  totalPages: 0,
                  calls: []
            }
      },
      callForPaperDetailedInfo: {
            status: Status.IDEL,
      },
}

const callForPaperSlice = createSlice({
      name: "callForPaper",
      initialState,
      reducers: {
            resetCallForPaperBasicInfoSlice: (state) => {
                  state.callForPaperBasicInfo = {
                        status: Status.IDEL,
                        data: {
                              totalPages: 0,
                              calls: []
                        }
                  }
            },

            resetCallForPaperDetailedInfoSlice: (state) => {
                  state.callForPaperDetailedInfo = {
                        status: Status.IDEL,
                        data: undefined,
                  }
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(getCallForPaperBasicInfo.pending, (state) => {
                        state.callForPaperBasicInfo.status = Status.LOADING;
                  })
                  .addCase(getCallForPaperBasicInfo.fulfilled, (state, action) => {
                        state.callForPaperBasicInfo.status = action.payload.calls.length <= 0
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;
                        state.callForPaperBasicInfo.data = action.payload;

                  })
                  .addCase(getCallForPaperBasicInfo.rejected, (state, action) => {
                        state.callForPaperBasicInfo.status = Status.FAILED;
                        state.callForPaperBasicInfo.error = action.payload;
                  })



                  .addCase(getCallForPaperDetailedById.pending, (state) => {
                        state.callForPaperDetailedInfo.status = Status.LOADING;
                  })
                  .addCase(getCallForPaperDetailedById.fulfilled, (state, action) => {
                        state.callForPaperDetailedInfo.status = Status.SUCCEEDED;
                        state.callForPaperDetailedInfo.data = action.payload;

                  })
                  .addCase(getCallForPaperDetailedById.rejected, (state, action) => {
                        state.callForPaperDetailedInfo.status = Status.FAILED;
                        state.callForPaperDetailedInfo.error = action.payload;
                  })

                  .addCase(deleteCallForPaperDetail.fulfilled, (state) => {
                        state.callForPaperBasicInfo.isToRefetch = !state.callForPaperBasicInfo.isToRefetch;
                  })
      },
})


export default callForPaperSlice.reducer;

export const callForPaperSliceAction = callForPaperSlice.actions;

export const callForPaperBasicInfoSliceState = (state: RootState) => state.callForPaper.callForPaperBasicInfo;
export const callForPaperDetailedSliceState = (state: RootState) => state.callForPaper.callForPaperDetailedInfo;