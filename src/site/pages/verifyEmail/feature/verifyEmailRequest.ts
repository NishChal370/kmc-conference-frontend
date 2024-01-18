import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { authApi } from "@/site/api/service/authApi";
import { IVerifyEmailRequest, IVerifyEmailResponse } from "@/site/model/verifyEmail/verifyEmailModel";

export const postVerifyEmail = createAppAsyncThunk<IVerifyEmailResponse, IVerifyEmailRequest>(
      "auth/confirm-email/post",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await authApi.verifyEmail(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);

