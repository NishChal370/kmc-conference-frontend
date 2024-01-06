import { authApi } from "@/api/service-normalUser/authApi";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { ILogin, ILoginResponse } from "@/model-normalUser/login/loginModel";

export const postLogin = createAppAsyncThunk<ILoginResponse, ILogin>(
      "user/login",
      async (loginDetail, { rejectWithValue }) => {
            try {
                  const response = await authApi.login(loginDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
