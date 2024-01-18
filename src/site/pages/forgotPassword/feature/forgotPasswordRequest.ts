import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { authApi } from "@/site/api/service/authApi";
import { IForgotPasswordRequest } from "@/site/model/forgotPassword/forgotPasswordModel";

export const postForgotPassword = createAppAsyncThunk<unknown, IForgotPasswordRequest>(
      "auth/forgot-password/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await authApi.forgotPassword(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

