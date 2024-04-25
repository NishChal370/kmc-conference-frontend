import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IApplicationsStatisticResponse } from "@/admin/model/applicantsStatistic/applicantsStatisticModel";
import { applicantsStatisticApi } from "@/admin/api/service/applicantsStatisticApi";

export const getApplicantsStatistic = createAppAsyncThunk<IApplicationsStatisticResponse>(
      "applicants-statistic/get",
      async (_, { rejectWithValue }) => {
            try {
                  const response = await applicantsStatisticApi.get();

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);