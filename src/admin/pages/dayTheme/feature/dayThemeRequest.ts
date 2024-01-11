import createAppAsyncThunk from "@/app/createAppAsyncThunk";
import { IDayThemeResponse, IDayThemeSearch } from "@/admin/model/dayTheme/dayThemeModel";
import { adminDayThemeApi } from "@/admin/api/service/adminDayTheme";

export const getDayThemes = createAppAsyncThunk<IDayThemeResponse, IDayThemeSearch>(
      "day/themes",
      async (searchDetail, { rejectWithValue }) => {
            try {
                  const response = await adminDayThemeApi.getDayThemes(searchDetail);

                  return response.data;
            } catch (error: any) {
                  return rejectWithValue(error.response.data);
            }
      }
);
