import { adminUserApi } from "@/admin/api/service/adminUserApi";
import { IUserPostRequest, IUserResponse, IUserSearch } from "@/admin/model/user/userModel";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";

export const getUsers = createAppAsyncThunk<IUserResponse, IUserSearch>(
      "admin/user/get",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminUserApi.getUsers(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const postUser = createAppAsyncThunk<unknown, IUserPostRequest>(
      "admin/user/post",
      async (newUserDetail, { rejectWithValue }) => {
            try {
                  const response = await adminUserApi.postUser(newUserDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
