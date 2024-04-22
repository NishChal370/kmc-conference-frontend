import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IVerifyApplicantSearch, IVerifyUserResponse } from "@/admin/model/verifyApplicant/verifyApplicantModel";
import { verifyApplicantApi } from "@/admin/api/service/verifyApplicantApi";

export const postVerifyApplicant = createAppAsyncThunk<IVerifyUserResponse, IVerifyApplicantSearch>(
      "admin/verify-applicant",
      async (detail, { rejectWithValue }) => {
            try {
                  const response = await verifyApplicantApi.post(detail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
