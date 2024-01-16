import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IChangePasswordRequest } from "@/admin/model/changePassword/changePasswordModel";
import { adminChangePasswordApi } from "@/admin/api/service/adminChangePasswordApi";

export const putAdminChangePassword = createAppAsyncThunk<unknown, IChangePasswordRequest>(
      "change-password",
      async (passwordDetail, { rejectWithValue }) => {
            try {
                  const response = await adminChangePasswordApi.putChangePassword(passwordDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);