import { adminProfileApi } from "@/admin/api/service/adminProfileApi";
import { IAdminProfilePutRequest, IAdminProfileResponse } from "@/admin/model/profile/adminProfileModel";
import createAppAsyncThunk from "@/app/createAppAsyncThunk";

export const getAdminProfile = createAppAsyncThunk<IAdminProfileResponse>(
      "admin/profile/get",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await adminProfileApi.getLoggedInProfile();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);


export const putAdminProfile = createAppAsyncThunk<unknown, IAdminProfilePutRequest>(
      "admin/profile/put",
      async (profileDetail, { rejectWithValue }) => {
            try {
                  const response = await adminProfileApi.putLoggedInProfile(profileDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);