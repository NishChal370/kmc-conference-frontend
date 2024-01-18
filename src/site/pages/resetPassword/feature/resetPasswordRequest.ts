import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { authApi } from "@/site/api/service/authApi";
import { IResetPasswordRequest } from "@/site/model/resetPassword/resetPasswordModel";

export const postResetPassword = createAppAsyncThunk<unknown, IResetPasswordRequest>(
      "auth/reset-password/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await authApi.resetPassword(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

