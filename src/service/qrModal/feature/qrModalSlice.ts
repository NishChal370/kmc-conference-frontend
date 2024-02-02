import { IQRResponse } from "@/admin/model/qr/qrModel";
import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchQR } from "./qrRequest";
import { IBasicSliceState } from "@/models/commonModel";
import { Status } from "@/enum/commonEnum";


interface IShowQRModal {
      title?: string;
      message?: string;
}

interface QRModalState extends IBasicSliceState {
      isOpen: boolean;
      title?: string;
      message?: string;
      qrCodeData?: IQRResponse;
}

const initialState: QRModalState = {
      status: Status.IDEL,
      isOpen: false,
      qrCodeData: undefined,
};

export const qrModalSlice = createSlice({
      name: 'qrModal',
      initialState,
      reducers: {
            showQRModal: (state, action: PayloadAction<IShowQRModal>) => {
                  const { title, message } = action.payload;
                  state.isOpen = true;
                  state.title = title;
                  state.message = message;
            },

            hideQRModal: (state) => {
                  state.status = Status.IDEL;
                  state.isOpen = false;
                  state.title = undefined;
                  state.message = undefined;
                  state.qrCodeData = undefined;
            },
      },
      extraReducers(builder) {
            builder
                  .addCase(fetchQR.pending, (state) => {
                        state.status = Status.LOADING;
                  })
                  .addCase(fetchQR.fulfilled, (state, action) => {
                        state.status = !action.payload
                              ? Status.DATA_NOT_FOUND
                              : Status.SUCCEEDED;

                        state.qrCodeData = action.payload;

                  })
                  .addCase(fetchQR.rejected, (state, action) => {
                        state.status = Status.FAILED;
                        state.error = action.payload;
                  })
      }
});



export default qrModalSlice.reducer;

export const qrModalAction = qrModalSlice.actions;


export const qrModalState = (state: RootState) => state.qrModal;