import { IBasicSliceState } from "@/models/commonModel";
import { IAuditLogResponse } from "@/admin/model/auditLog/auditLogModel";
import { Status } from "@/enum/commonEnum";
import { createSlice } from "@reduxjs/toolkit";
import { getAuditLogDetail } from "./auditLogRequest";
import { RootState } from "@/app/store";

interface IAuditLogState extends IBasicSliceState {
      data: IAuditLogResponse
}


const initialState: IAuditLogState = {
      status: Status.IDEL,
      data: {
            totalPages: 0,
            logEntries: []
      }
}

const auditLogSlice = createSlice({
      name: "auditLog",
      initialState,
      reducers: {
            resetAuditLogSlice: (state) => {
                  state.status = Status.IDEL;
                  state.error = undefined;
                  state.data = {
                        totalPages: 0,
                        logEntries: []
                  }

            }
      },
      extraReducers(builder) {
            builder
                  .addCase(getAuditLogDetail.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(getAuditLogDetail.fulfilled, (state, action) => {
                        state.status = !action.payload.logEntries
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;

                        state.data = action.payload;
                  })
                  .addCase(getAuditLogDetail.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      }
})

export default auditLogSlice.reducer;

export const auditLogSliceAction = auditLogSlice.actions;

export const auditLogSlicesState = (state: RootState) => state.auditLogSlice;