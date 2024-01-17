import { authApi } from "@/site/api/service/authApi";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";


export const fetchVeryLogin = createAppAsyncThunk(
      "user/login/verify",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await authApi.verifyLogin();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const fetchUserLogout = createAppAsyncThunk(
      "user/logout",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await authApi.logout();

                  return response.data;
            } catch (error: any) {

                  return rejectWithValue(error.response.data);
            }
      }
);

