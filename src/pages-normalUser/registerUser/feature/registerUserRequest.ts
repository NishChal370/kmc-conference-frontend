import { authApi } from "@/api/service-normalUser/authApi";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IRegisterUserPostRequest } from "@/model-normalUser/registerUser/registerUserModel";

export const postRegisterUser = createAppAsyncThunk<unknown, IRegisterUserPostRequest>(
      "user/register",
      async (userDetail, { rejectWithValue }) => {
            try {
                  const response = await authApi.registerUser(userDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
