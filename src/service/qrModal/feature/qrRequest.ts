import { qrApi } from "@/admin/api/service/qrApi";
import { IQRResponse } from "@/admin/model/qr/qrModel";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";

export const fetchQR = createAppAsyncThunk<IQRResponse>(
      "qr/get",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await qrApi.get();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
