import { authApi } from "@site/api/service/authApi";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { ILogin, ILoginResponse } from "@site/model/login/loginModel";

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
